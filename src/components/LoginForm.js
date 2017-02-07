import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, loginUser } from '../actions'
import { store } from '../store'

import { Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {
  onUsernameChange(text) {
    store.dispatch(usernameChanged(text))
  }

  onPasswordChanged(text) {
    store.dispatch(passwordChanged(text))
  }

  onButtonPressed() {
    const { username, password } = this.props
    store.dispatch(loginUser({username, password}))
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return <Button onPress={this.onButtonPressed.bind(this)}>Login</Button>
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="••••••"
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { username, password, error, loading } = auth

  return { username, password, error, loading }
}

export default connect(mapStateToProps)(LoginForm)
