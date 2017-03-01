import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { ProgressBar } from '../common';

class ThematicalListRow extends Component {
  onCardPress() {
    const serie = {
      type: 1,
      category: this.props.theme.letter,
      label: "Thématique"
    };

    Actions.statsDetail({ serie: serie });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onCardPress.bind(this)}>
        <View style={styles.wrapper}>
          <View style={[styles.letterContainerStyle, { backgroundColor: this.props.theme.color}]}>
            <Text style={styles.letterStyle}>{this.props.theme.letter}</Text>
          </View>
          <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>{this.props.theme.label}</Text>
            <ProgressBar progress={this.props.theme.progress} fillColor={this.props.theme.color} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  wrapper: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 1
  },
  letterContainerStyle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: 50
  },
  letterStyle: {
    fontWeight: '900',
    textAlign: 'center',
    color: '#fff'
  },
  textContainerStyle: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 15
  },
  textStyle: {

  }
}

export { ThematicalListRow };
