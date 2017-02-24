import React from 'react';
import { List, ListItem } from 'react-native-elements';

const UserSettings = () => {
  const list = [
    {
      title: 'Modifier le profil',
      icon: 'md-settings'
    },
    {
      title: 'Changer de mot de passe',
      icon: 'md-lock'
    }
  ]
  return (
    <List containerStyle={{ flex: 1 }}>
      { list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{name: item.icon, type: 'ionicon'}}
        />
      )) }
    </List>
  );
};

export { UserSettings };
