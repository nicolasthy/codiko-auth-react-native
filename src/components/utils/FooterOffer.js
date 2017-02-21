import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class FooterOffer extends Component {
  render() {
    return (
      <View style={styles.offerFooterStyle}>
        <View style={styles.roundPriceStyle}>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: '600', justifyContent: 'center' }}>0</Text>
          <Text style={{ color: '#fff', justifyContent: 'flex-start', marginTop: -5 }}>€</Text>
        </View>
        <View style={[styles.offerFooterColumnStyle, { flexGrow: 10 }]}>
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>
            Accès premium gratuit pendant 24h
          </Text>
          <Text style={{ color: '#fff', fontSize: 11 }}>
            Inscription sans engagement.
          </Text>
        </View>
        <View style={styles.offerFooterColumnStyle}>
          <Icon
            name="ios-arrow-forward"
            size={30}
            color='#fff'
            style={{ textAlign: 'center' }}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  offerFooterStyle: {
    flexDirection: 'row',
    backgroundColor: '#4f5244',
  },
  offerFooterColumnStyle: {
    flex: 2,
    alignSelf: 'center'
  },
  roundPriceStyle: {
    backgroundColor: '#d0e881',
    borderRadius: 50,
    margin: 10,
    padding: 20,
    width: 60,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  }
}

export { FooterOffer };
