import React from 'react';
import { View, Text, Image } from 'react-native';
import { Grid, Row } from 'react-native-elements';

const UserSubscription = () => {
  return (
    <Image
      style={styles.backgroundImageStyle}
      resizeMode="contain"
      source={require('../../../images/curved-footer.png')}
    >
      <Text>Coucou</Text>
    </Image>
  );
};

const styles = {
  backgroundImageStyle: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { UserSubscription };
