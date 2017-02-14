import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

import Settings from './profile/Settings';

class Profile extends Component {
  render() {
    return (
      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height / 3 }}>
          <Image
            source={{uri: 'https://www.codiko.com/system/letter_avatars/2/N/247_192_0/150.png'}}
            resizeMode="contain"
            style={{ width: 100, height: 100, marginTop: -5, borderRadius: 50 }}
          />
          <Text style={styles.userNameStyle}>Bonjour Nicolas !</Text>
        </View>
        <View>
          <Settings />
        </View>
      </View>
    );
  }
};

const styles = {
  userNameStyle: {
    fontSize: 16,
    color: '#2c2c2c',
    fontWeight: '500',
    marginTop: 20
  }
}

export default Profile;
