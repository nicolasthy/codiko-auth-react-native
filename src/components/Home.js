import React, { Component } from 'react';

import { View, Text, Image, Dimensions } from 'react-native';
import Orientation from 'react-native-orientation';

import { TrainingCard } from './utils/TrainingCard';

class Home extends Component {
  render() {
    const { width, height } = Dimensions.get('window');
    const screenHeight = (height > width) ? (height - 105) : (width - 105);

    return (
      <View style={{ flex: 1, alignSelf: 'stretch', height: screenHeight }}>
        <View style={{ flex: 2, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.subTitleStyle}>BIENVENUE SUR</Text>
          <Image
            source={require('../images/logo-black.png')}
            resizeMode="contain"
            style={{ width: 200, marginTop: -5 }}
          />
        </View>

        <View style={{ flex: 2, justifyContent: 'flex-start', flexGrow: 4 }}>
          <TrainingCard
            trainingType='thématique'
            trainingLabel='Entrainez vous par Thématique et renforcez vos connaissances'
            cardBackgroundColor="#A7CD2C"
            cardBackgroundAltColor="#85a323"
          />

          <TrainingCard
            trainingType='entrainement'
            trainingLabel='Faites des séries de 40 questions multithématiques sans limite de temps'
            cardBackgroundColor="#2c2f36"
            cardBackgroundAltColor="#202328"
          />

          <TrainingCard
            trainingType='examen'
            trainingLabel='Mettez vous en condition d’examen pour évaluer vos capacités'
            cardBackgroundColor="#50C8C6"
            cardBackgroundAltColor="#37aeac"
          />
        </View>
      </View>
    );
  }
}

const styles = {
  subTitleStyle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 12,
    color: '#999999'
  }
};

export default Home;
