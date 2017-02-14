import React, { Component } from 'react';
import { View, Text, StatusBar, Animated, Image } from 'react-native';

import { Spinner } from './common';

class SplashScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      { toValue: 1 }
    ).start();
  }

  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.backgroundStyle}>
        <Animated.View style={[styles.logoContainerStyle, { opacity: this.state.fadeAnim }]}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Image
              source={require('../images/logo.jpg')}
              resizeMode="contain"
              style={{ width: 250, height: 120 }}
            />
          </View>
          <Spinner size="large" />
        </Animated.View>
      </View>
    );
  }
};

const styles = {
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#373b46'
  },
  logoContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default SplashScreen;
