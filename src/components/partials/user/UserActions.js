import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Grid, Row } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class UserActions extends Component {
  onButtonPress() {
    Actions.settings();
  }

  onActionPress() {
    console.log("TODO: HELP");
  }

  render() {
    return (
      <Grid style={styles.containerStyle}>
        <Row style={{ alignItems: 'flex-end' }}>
          <TouchableWithoutFeedback onPress={this.onButtonPress.bind(this)}>
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>Modifier mon profil</Text>
            </View>
          </TouchableWithoutFeedback>
        </Row>
        <Row>
          <TouchableWithoutFeedback>
            <View style={styles.actionStyle}>
              <Text style={styles.actionTextStyle}>Besoin d'aide ?</Text>
            </View>
          </TouchableWithoutFeedback>
        </Row>
      </Grid>
    );
  }
};

const styles = {
  containerStyle: {
    alignItems: 'center'
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: '#cecece',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  buttonTextStyle: {
    color: '#a9a9a9',
    fontWeight: '600'
  },
  actionTextStyle: {
    color: '#A7CD2C'
  }
}

export { UserActions };
