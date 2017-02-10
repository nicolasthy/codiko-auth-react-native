import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import { TrainingCard } from './utils/TrainingCard';

class Home extends Component {
  render() {
    return (
      <View>
        <View style={{ flex: 1, alignSelf: 'center', marginTop: 90 }}>
          <Text style={styles.subTitleStyle}>BIENVENUE SUR</Text>
          <Image
            source={require('../images/logo-black.png')}
            resizeMode="contain"
            style={{ width: 200, marginTop: -5 }}
          />
        </View>

        <View style={{ flex: 1, flexDirection: 'column', marginTop: 80 }}>
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
