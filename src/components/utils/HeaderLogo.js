import React, { Component } from 'react';
import { View, Text, Animated, Image } from 'react-native';

class HeaderLogo extends Component {
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
    return (
      <Animated.View style={[styles.logoContainerStyle, { opacity: this.state.fadeAnim }]}>
        <Image
          style={styles.backgroundImageStyle}
          resizeMode="cover"
          source={require('../../images/header-background.jpg')}
        >
          <Image
            source={require('../../images/logo.png')}
            resizeMode="contain"
            style={{ width: 200, height: 70 }}
          />
        </Image>
      </Animated.View>
    );
  }
}

const styles = {
  logoContainerStyle: {
    flex: 3
  },
  backgroundImageStyle: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
}

export { HeaderLogo };
