import React, { Component } from 'react';

import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Orientation from 'react-native-orientation';
import { Actions, ActionConst } from 'react-native-router-flux';

class Viewer extends Component {
  componentWillMount() {
    Orientation.lockToLandscape();
  }

  onBackPress() {
    Orientation.lockToPortrait();
    Orientation.unlockAllOrientations();
    Actions.main({ type: ActionConst.RESET });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.onBackPress.bind(this)}>
          <View>
            <Text>Back</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text>Viewer</Text>
      </View>
    );
  }
}

export default Viewer;
