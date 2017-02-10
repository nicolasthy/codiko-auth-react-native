import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';

class AverageScoreCard extends Component {
  onCardPress() {
    Actions.statsDetail({ statsType: this.props.type });
  }

  render() {
    const { type, score, lastTraining } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onCardPress.bind(this)}>
        <View
          style={[
            styles.containerStyle,
            type === 'entrainement' ? styles.pedagogicalStyle : styles.examStyle
          ]}
        >
          <View>
            <Text style={styles.textStyle}>Moyenne série {type}</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'flex-end' }}>
              <Text style={styles.scoreTextStyle}>{score}</Text>
              <Text style={styles.countTextStyle}>/40</Text>
            </View>
            <View>
              <Text style={styles.smallTextStyle}>Dernière série le {lastTraining}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1
  },
  pedagogicalStyle: {
    backgroundColor: '#A7CD2C'
  },
  examStyle: {
    backgroundColor: '#50C8C6'
  },
  textStyle: {
    color: '#fff',
    fontWeight: '500',
    width: 120
  },
  scoreTextStyle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0, 0.03)',
    textShadowOffset: { width: 2, height: 2 }
  },
  countTextStyle: {
    color: '#fff',
    paddingBottom: 4,
    paddingLeft: 2,
    fontSize: 18
  },
  smallTextStyle: {
    opacity: 0.8,
    color: '#fff',
    fontSize: 12
  }
};

export { AverageScoreCard };
