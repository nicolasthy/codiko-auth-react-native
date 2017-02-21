import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Dimensions } from 'react-native';
import { Spinner } from './common';

import { fetchCurrentUser } from '../actions';
import { getCurrentUser } from '../selectors';
import { store } from '../store';

import Settings from './profile/Settings';

class Profile extends Component {
  componentWillMount() {
    const access_token = store.getState().auth.access_token;
    store.dispatch(fetchCurrentUser(access_token));
  }

  render() {
    const { currentUser } = this.props;

    if(currentUser) {
      return (
        <View>
          <View style={{ alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height / 3 }}>
            <Image
              source={{uri: 'https://www.codiko.com/system/letter_avatars/2/N/247_192_0/150.png'}}
              resizeMode="contain"
              style={{ width: 100, height: 100, marginTop: -5, borderRadius: 50 }}
            />
            <Text style={styles.userNameStyle}>Bonjour {currentUser["first-name"]} !</Text>
          </View>
          <View>
            <Settings />
          </View>
        </View>
      );
    }

    return (
      <View>
        <Spinner size="small" />
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

const mapStateToProps = (state, props) => {
  return {
    currentUser: getCurrentUser(state)
  }
}

export default connect(mapStateToProps)(Profile);
