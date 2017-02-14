import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Settings extends Component {
  render() {
    return (
      <View>
        <Text style={styles.listLabelStyle}>MON COMPTE</Text>
        <View style={{ borderTopWidth: 0.5, borderTopColor: '#c8c7cc', borderBottomWidth: 0.5, borderBottomColor: '#c8c7cc' }}>
          <TouchableHighlight style={styles.touchableStyle}>
            <View style={[styles.containerStyle, { borderBottomWidth: 0.5 }]}>
              <View style={{ flex: 2 }}><Text>Modifier mes informations</Text></View>
              <View style={{ flex: 2, alignItems: 'flex-end' }}>
                <Icon name="ios-arrow-forward" size={20} style={{ color: '#c8c7cc', marginBottom: -5 }} />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchableStyle}>
            <View style={styles.containerStyle}>
              <View style={{ flex: 2 }}><Text>Abonnement</Text></View>
              <View style={{ flex: 2, alignItems: 'flex-end' }}><Text>PREMIUM</Text></View>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={[styles.smallTextStyle, { marginTop: 10 }]}>Offre Découverte - Du 23 Janvier au 23 Avril</Text>
        <View style={{ paddingBottom: 10 }}>
          <Text style={[styles.smallTextStyle, { color: '#A7CD2C' }]}>Renouveler mon abonnement</Text>
        </View>

        {/* <Text style={styles.listLabelStyle}>NOUS SUIVRE</Text> */}
      </View>
    );
  }
};

const styles = {
  touchableStyle: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 15,
  },
  containerStyle: {
    borderBottomColor: '#c8c7cc',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    flexDirection: 'row'
  },
  listLabelStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 35,
    marginBottom: 5,
    paddingLeft: 5,
    color: '#a0a0a0',
    fontSize: 11,
    fontWeight: '600'
  },
  smallTextStyle: {
    fontSize: 12,
    textAlign: 'center'
  }
};

export default Settings;
