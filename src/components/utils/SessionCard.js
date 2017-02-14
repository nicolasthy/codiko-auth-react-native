import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class SessionCard extends Component {
  render() {
    const { id, date, score } = this.props.session;

    return (
      <TouchableHighlight style={styles.touchableStyle} underlayColor="rgba(0,0,0,.015)">
        <View style={[styles.containerStyle, this.props.style]}>
          <View style={styles.dateContainer}>
            <Text>Série du {date}</Text>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={[styles.scoreStyle, { color: score >= 35 ? '#a7cd2c' : '#cb3333' }]}>{score}</Text>
            <Text style={styles.countStyle}>/40</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
};

const styles = {
  touchableStyle: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 15,
  },
  containerStyle: {
    borderBottomColor: '#c8c7cc',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    flexDirection: 'row'
  },
  dateContainer: {
    flex: 2
  },
  scoreContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  scoreStyle: {
    fontSize: 20,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0, 0.03)',
    textShadowOffset: { width: 2, height: 2 }
  },
  countStyle: {
    fontWeight: '600'
  }
};

export { SessionCard };
