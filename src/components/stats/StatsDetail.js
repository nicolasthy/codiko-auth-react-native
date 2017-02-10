import React, { Component } from 'react';
import { View, Text } from 'react-native';

class StatsDetail extends Component {
  render() {
    return (
      <View style={{ paddingTop: 65 }}>
        <Text>Stats for {this.props.statsType}</Text>
      </View>
    );
  }
}

export default StatsDetail;
