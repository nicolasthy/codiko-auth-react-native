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
    const { serieType } = this.props;
    const type = serieType === 0 ? "Entrainement" : "Examen";

    return (
      <TouchableWithoutFeedback onPress={this.onCardPress.bind(this)}>
        <View
          style={[
            styles.containerStyle,
            serieType === 0 ? styles.pedagogicalStyle : styles.examStyle
          ]}
        >
          <View>
            <Text style={styles.textStyle}>Moyenne série {type}</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'flex-end' }}>
              <Text style={styles.scoreTextStyle}>40</Text>
              <Text style={styles.countTextStyle}>/40</Text>
            </View>
            <View>
              <Text style={styles.smallTextStyle}>Dernière série le </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 1
  },
  pedagogicalStyle: {
    backgroundColor: '#A7CD2C'
  },
  examStyle: {
    backgroundColor: '#50C8C6'
  },
  textStyle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    width: 120
  },
  scoreTextStyle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0, 0.03)',
    textShadowOffset: { width: 2, height: 2 },
    elevation: 1
  },
  countTextStyle: {
    color: '#fff',
    paddingBottom: 4,
    paddingLeft: 2,
    fontSize: 20
  },
  smallTextStyle: {
    opacity: 0.8,
    color: '#fff',
    fontSize: 12
  }
};


export { AverageScoreCard };
