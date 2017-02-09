import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Alert, Dimensions, StatusBar } from 'react-native';

import { usernameChanged, passwordChanged, loginUser, loginUserRetry } from '../actions';
import { store } from '../store';

import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
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

  triggerAlert() {
    if (this.props.error) {
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
    this.triggerAlert();
    StatusBar.setBarStyle('light-content', true);

    return (
      <View>
        <Card style={{ marginTop: 0, marginLeft: 0, marginRight: 0 }}>
          <CardSection style={{ height: Dimensions.get('window').height / 4.5, backgroundColor: '#202328', marginBottom: 30 }}>
            <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
              <Text style={{ fontSize: 36, fontWeight: '800', color: '#fff' }}>CODIKO</Text>
            </View>
          </CardSection>

          <CardSection>
            <Input
              label="Email"
              placeholder="Adresse e-mail"
              onChangeText={this.onUsernameChange.bind(this)}
              value={this.props.username}
              autoCapitalize='none'
            />
          </CardSection>

          <CardSection style={{ paddingTop: 0 }}>
            <Input
              secureTextEntry
              label="Password"
              placeholder="Mot de passe"
              onChangeText={this.onPasswordChanged.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <CardSection style={{ paddingTop: 15 }}>
            {this.renderButton()}
          </CardSection>

          <CardSection>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.smallTextStyle}>
                Vous avez oublié vos identifiants de connexion?
              </Text>
              <Text style={styles.smallTextStyle}>Mot de passe oublié</Text>
            </View>
          </CardSection>

          <CardSection>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.smallTextStyle}>ou</Text>
            </View>
          </CardSection>

          <CardSection>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.smallTextStyle}>Se connecter avec Facebook</Text>
            </View>
          </CardSection>

          <CardSection style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'flex-end' }}>
            <Text>Vous n'avez pas de compte ? Inscrivez-vous</Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  smallTextStyle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ddd'
  }
};

const mapStateToProps = ({ auth }) => {
  const { username, password, error, loading } = auth;

  return { username, password, error, loading };
};

export default connect(mapStateToProps)(LoginForm);
