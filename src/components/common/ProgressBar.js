import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

class ProgressBar extends Component {
  render() {
    const { progress, fillColor } = this.props;
    const barWidth = Dimensions.get('window').width - 130;

    return (
      <View style={{ flex: 1, height: 5, marginTop: 5, width: barWidth, backgroundColor: '#efefef' }}>
        <View style={{
          flex: 1,
          width: ((progress * barWidth) / 100),
          backgroundColor: fillColor
        }}></View>
      </View>
    );
  }
};

export { ProgressBar };
