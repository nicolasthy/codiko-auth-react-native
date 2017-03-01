import React, { Component } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { persistor } from '../store';
import { List, ListItem } from 'react-native-elements'
import { View, Text, Alert } from 'react-native';

class Settings extends Component {
  onLogoutPress() {
    Alert.alert('Se déconnecter de Codiko ?', '', [
      {
        text: 'Annuler', onPress: () => console.log("Dismiss")
      },
      {
        text: 'Déconnexion', onPress: () => {
          persistor.purge();
          Actions.auth({ type: ActionConst.RESET });
        }
      }
    ], { cancelable: false });
  }

  render() {
    const informations = [
      {
        title: "Prénom"
      }
    ]

    const actions = [
      {
        title: "Se déconnecter",
        onPress: this.onLogoutPress.bind(this),
        hideChevron: true,
        titleStyle: { color: 'red' }
      }
    ];

    return (
      <View>
        <List containerStyle={{ marginTop: 65 }}>
          { informations.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              onPress={item.onPress}
              hideChevron={item.hideChevron}
              titleStyle={item.titleStyle}
            />
          )) }
        </List>

        <List containerStyle={{ marginTop: 10 }}>
          { actions.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              onPress={item.onPress}
              hideChevron={item.hideChevron}
              titleStyle={item.titleStyle}
            />
          )) }
        </List>
      </View>
    );
  }
}

const styles = {
}

export default Settings;
