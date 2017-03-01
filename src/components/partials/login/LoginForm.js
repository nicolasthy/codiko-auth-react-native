import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Grid, Row, Button } from 'react-native-elements';

import { Input, Spinner } from '../../common';

class LoginForm extends Component {
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        iconRight
        fontSize={12}
        title='Se connecter'
        onPress={this.props.onButtonPressed}
        backgroundColor="#A7CD2C"
        borderRadius={3}
        disabled={this.props.username.length === 0 || this.props.password.length === 0}
        disabledStyle={styles.disabledStyle}
      />
    )
  }

  render() {
    return (
      <Grid>
        <Row size={3}>
          <View style={styles.formInputsContainerStyle}>
            <Input
              label="Email"
              placeholder="Adresse e-mail"
              onChangeText={this.props.onUsernameChange}
              value={this.props.username}
              autoCapitalize='none'
              inputCustomStyle={{
                borderBottomWidth: 0.5,
                borderBottomColor: '#ddd'
              }}
              keyboardType='email-address'
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.refs.passwordInput.refs.input.focus()
              }}
            />

            <Input
              ref="passwordInput"
              secureTextEntry
              label="Password"
              placeholder="Mot de passe"
              onChangeText={this.props.onPasswordChanged}
              value={this.props.password}
              returnKeyType="done"
              onSubmitEditing={this.props.onButtonPressed}
            />
          </View>
        </Row>

        <Row size={1}>
          <View style={styles.buttonContainerStyle}>
            {this.renderButton()}
          </View>
        </Row>

        <Row size={2}>
          <View style={styles.linksContainerStyle}>
            {/* TODO Form links "Lost password" and maybe others (i.e: Help) */}
            <Text style={{ textAlign: 'center', color: '#fff' }}>Mot de passe oublié?</Text>
          </View>
        </Row>
      </Grid>
    );
  }
};

const styles = {
  formInputsContainerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    padding: 5,
  },
  buttonContainerStyle: {
    flex: 1,
    marginLeft: 35,
    marginRight: 35
  },
  linksContainerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  disabledStyle: {
    backgroundColor: '#2c2f37',
    opacity: 0.8
  }
};

export { LoginForm };
