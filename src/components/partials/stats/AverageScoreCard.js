import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { View, Text, TouchableWithoutFeedback } from 'react-native';

class AverageScoreCard extends Component {
  onCardPress() {
    const serie = {
      type: this.props.serieType,
      label: this.props.serieType === 0 ? "Entrainement" : "Examen"
    };

    Actions.statsDetail({ serie: serie });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onCardPress.bind(this)}>
        <View><Text>{this.props.serieType === 0 ? "Entrainement" : "Examen"}</Text></View>
      </TouchableWithoutFeedback>
    );
  }
}

export default AverageScoreCard;
