import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const LoginHeader = () => {
  return (
    <Animatable.View animation="fadeIn" style={{ flex: 1 }}>
      <Image
        style={styles.backgroundImageStyle}
        resizeMode="cover"
        source={require('../../../images/header-background.jpg')}
      >
        <Animatable.Image
          source={require('../../../images/logo.png')}
          resizeMode="contain"
          style={{ width: 200, height: 70 }}
          animation="fadeInUp"
        />
        <Animatable.Text animation="fadeIn" style={styles.descriptionTextStyle}>Entraînez vous au code de la route avec Codiko et profitez de 1600 questions de code en ligne ainsi que de nombreux tests.</Animatable.Text>
      </Image>
    </Animatable.View>
  );
};

const styles = {
  backgroundImageStyle: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionTextStyle: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: 13,
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 50
  }
}

export { LoginHeader };
