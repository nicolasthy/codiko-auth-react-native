import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { store } from '../store';

import { AverageScoreCard } from './utils'

class Stats extends Component {
  render() {
    return (
      <View>
        <AverageScoreCard type='entrainement' score={36} lastTraining='03/11/2016' />
        <AverageScoreCard type='examen' score={23} lastTraining='03/11/2016' />
      </View>
    );
  }
}

export default Stats;
