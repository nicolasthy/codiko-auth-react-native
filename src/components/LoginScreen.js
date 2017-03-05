import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, StatusBar, Platform } from 'react-native';
import { Grid, Row } from 'react-native-elements';

import {
  LoginHeader,
  LoginForm,
  LoginFooter
} from './partials/login';

import {
  setUsername,
  setPassword,
  login,
  loginRetry
} from '../actions';

import { store } from '../store';

class LoginScreen extends Component {
  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS !== 'ios') {
      StatusBar.setBackgroundColor('#373b46');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.triggerAlert(nextProps);
  }

  onUsernameChange(value) {
    store.dispatch(setUsername(value));
  }

  onPasswordChanged(value) {
    store.dispatch(setPassword(value));
  }

  onButtonPressed() {
    const { username, password } = this.props;
    store.dispatch(login({ username, password }));
  }

  triggerAlert(props) {
    if (props.error) {
      Alert.alert('Erreur de connexion', 'Les identifiants saisis sont incorrects.', [{
        text: 'Reesayer', onPress: () => store.dispatch(loginRetry())
      }], { cancelable: false });
    }
  }

  render() {
    return (
      <Grid style={{ backgroundColor: '#30343d' }}>
        {/* HEADER SECTION */}
        <Row size={3}>
          <LoginHeader />
        </Row>

        {/* FORM SECTION */}
        <Row size={3}>
          <LoginForm
            onUsernameChange={this.onUsernameChange.bind(this)}
            onPasswordChanged={this.onPasswordChanged.bind(this)}
            onButtonPressed={this.onButtonPressed.bind(this)}
            username={this.props.username}
            password={this.props.password}
            loading={this.props.loading}
          />
        </Row>

        {/* FOOTER SECTION */}
        <Row size={1}>
          <LoginFooter />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { username, password, error, loading } = auth;

  return { username, password, error, loading };
};

export default connect(mapStateToProps)(LoginScreen);
