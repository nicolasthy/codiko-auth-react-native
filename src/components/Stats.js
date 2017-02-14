import React, { Component } from 'react';
import { View, Text, ListView, Dimensions } from 'react-native';

import { store } from '../store';

import { AverageScoreCard, ThematicalListRow } from './utils';

class Stats extends Component {
  renderThemes(themes) {
    return themes.map((theme, key) => {
      return <ThematicalListRow key={key} theme={theme} />;
    });
  }

  render() {
    const themes = [
      { letter: 'L', label: 'Dispositions Légales', color: '#65d2e7', progress: 100 },
      { letter: 'C', label: 'Le Conducteur', color: '#de3242', progress: 30 },
      { letter: 'R', label: 'La Route', color: '#c364f4', progress: 60 },
      { letter: 'U', label: 'Les autres usagers de la route', color: '#f662b4', progress: 15 },
      { letter: 'D', label: 'Réglementation générale et divers', color: '#fc9302', progress: 20 },
      { letter: 'A', label: 'Porter secours', color: '#eee556', progress: 10 },
      { letter: 'P', label: 'Prendre et quitter le véhicule', color: '#556270', progress: 35 },
      { letter: 'M', label: 'Eléments mécaniques', color: '#be9262', progress: 5 },
      { letter: 'S', label: 'Equipements de sécurité du véhicule', color: '#1fa3f6', progress: 45 },
      { letter: 'E', label: 'Respect de l\'environnement', color: '#a7cd2c', progress: 30 }
    ];

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(themes);

    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <AverageScoreCard type='entrainement' score={36} lastTraining='03/11/2016' />
        <AverageScoreCard type='examen' score={23} lastTraining='03/11/2016' />

        <Text style={styles.listLabelStyle}>{"Moyennes thématiques".toUpperCase()}</Text>
        <View>{this.renderThemes(themes)}</View>
      </View>
    );
  }
}

const styles = {
  listLabelStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 35,
    marginBottom: 5,
    paddingLeft: 5,
    color: '#a0a0a0',
    fontSize: 11,
    fontWeight: '600'
  }
}

export default Stats;
