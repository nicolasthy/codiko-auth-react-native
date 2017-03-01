import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Grid, Row } from 'react-native-elements';
import MaterialInitials from 'react-native-material-initials/native';
import GoogleColors from '../../utils/GoogleColors';

class UserInformations extends Component {
  renderAvatar() {
    const { user } = this.props;
    const charCode = user["first-name"].toLowerCase().charCodeAt(0) - 97;

    if(user.avatar) {
      return <Text>Avatar</Text>
    }

    return (
      <MaterialInitials
        style={{alignSelf: 'center'}}
        backgroundColor={`rgb(${GoogleColors[charCode].r}, ${GoogleColors[charCode].g}, ${GoogleColors[charCode].b})`}
        color={'rgba(255,255,255,0.7)'}
        size={100}
        text={this.props.user["first-name"]}
        single={true}
      />
    )
  }

  render() {
    return (
      <Grid style={styles.containerStyle}>
        <Row size={4}>
          {this.renderAvatar()}
        </Row>
        <Row size={1}>
          <Text>Bonjour {this.props.user["first-name"]} !</Text>
        </Row>
      </Grid>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { UserInformations };
