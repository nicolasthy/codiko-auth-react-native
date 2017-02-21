import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Alert, StatusBar } from 'react-native';

import {
  usernameChanged,
  passwordChanged,
  loginUser,
  loginUserRetry
} from '../actions';

import { store } from '../store';

import { Input, Button, Spinner } from './common';
import { HeaderLogo, FooterOffer } from './utils';

class LoginForm extends Component {
  componentWillMount() {
    StatusBar.setBarStyle('light-content', true);
  }

  componentWillReceiveProps(nextProps) {
    this.triggerAlert(nextProps);
  }

  onUsernameChange(text) {
    store.dispatch(usernameChanged(text));
  }

  onPasswordChanged(text) {
    store.dispatch(passwordChanged(text));
  }

  onButtonPressed() {
    const { username, password } = this.props;
    store.dispatch(loginUser({ username, password }));
  }

  triggerAlert(props) {
    if (props.error) {
      Alert.alert('Erreur de connexion', 'Les identifiants saisis sont incorrects.', [{
        text: 'Reesayer', onPress: () => store.dispatch(loginUserRetry())
      }], { cancelable: false });
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        onPress={this.onButtonPressed.bind(this)}
        disabled={this.props.username.length === 0 || this.props.password.length === 0}
      >
        Se connecter
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <HeaderLogo />
        <View>
          <Text style={styles.descriptionTextStyle}>Entraînez vous au code de la route avec Codiko et profitez de 1600 questions de code en ligne ainsi que de nombreux tests.</Text>
        </View>
        <View style={styles.formContainerStyle}>
          <View style={styles.formStyle}>
            <View style={styles.inputContainerStyle}>
              <Input
                label="Email"
                placeholder="Adresse e-mail"
                onChangeText={this.onUsernameChange.bind(this)}
                value={this.props.username}
                autoCapitalize='none'
                inputCustomStyle={{ borderBottomWidth: 0.5, borderBottomColor: '#ddd' }}
                keyboardType='email-address'
              />
            </View>
            <View style={styles.inputContainerStyle}>
              <Input
                secureTextEntry
                label="Password"
                placeholder="Mot de passe"
                onChangeText={this.onPasswordChanged.bind(this)}
                value={this.props.password}
              />
            </View>
          </View>
          <View style={styles.buttonContainerStyle}>
            {this.renderButton()}
          </View>
        </View>
        <View style={styles.footerContainerStyle}>
          <Text style={styles.footerTextStyle}>Mot de passe oublié?</Text>
          <FooterOffer />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#373b46'
  },
  formContainerStyle: {
    flex: 3,
    justifyContent: 'center',
    marginTop: 15
  },
  footerContainerStyle: {
    flex: 3,
    justifyContent: 'flex-end'
  },
  descriptionTextStyle: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50
  },
  formStyle: {
    backgroundColor: '#fff',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 5,
    padding: 2,
    borderRadius: 3,
    justifyContent: 'flex-start'
  },
  inputContainerStyle: {
    flexGrow: 1,
  },
  buttonContainerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    marginLeft: 15,
    marginRight: 15
  },
  footerTextStyle: {
    color: '#fff',
    fontSize: 11,
    margin: 15,
    textAlign: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { username, password, error, loading } = auth;

  return { username, password, error, loading };
};

export default connect(mapStateToProps)(LoginForm);
