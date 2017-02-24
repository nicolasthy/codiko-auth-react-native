import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialInitials from 'react-native-material-initials/native';

const GOOGLE_COLORS = [
  { r: 226, g: 95, b: 81 },
  { r: 242, g: 96, b: 145 },
  { r: 187, g: 101, b: 202 },
  { r: 149, g: 114, b: 207 },
  { r: 120, g: 132, b: 205 },
  { r: 91, g: 149, b: 249 },
  { r: 72, g: 194, b: 249 },
  { r: 69, g: 208, b: 226 },
  { r: 72, g: 182, b: 172 },
  { r: 82, g: 188, b: 137 },
  { r: 155, g: 206, b: 95 },
  { r: 212, g: 227, b: 74 },
  { r: 254, g: 218, b: 16 },
  { r: 247, g: 192, b: 0 },
  { r: 255, g: 168, b: 0 },
  { r: 255, g: 138, b: 96 },
  { r: 194, g: 194, b: 194 },
  { r: 143, g: 164, b: 175 },
  { r: 162, g: 136, b: 126 },
  { r: 163, g: 163, b: 163 },
  { r: 175, g: 181, b: 226 },
  { r: 179, g: 155, b: 221 },
  { r: 194, g: 194, b: 194 },
  { r: 124, g: 222, b: 235 },
  { r: 188, g: 170, b: 164 },
  { r: 173, g: 214, b: 125 }
];

class UserInformations extends Component {
  renderAvatar() {
    if(this.props.user.avatar) {
      return <Text>Avatar</Text>
    }

    const code = this.props.user["first-name"].substr(0,1).toLowerCase().charCodeAt(0) - 97;

    return (
      <MaterialInitials
        style={{alignSelf: 'center'}}
        backgroundColor={`rgb(${GOOGLE_COLORS[code].r}, ${GOOGLE_COLORS[code].g}, ${GOOGLE_COLORS[code].b})`}
        color={'white'}
        size={100}
        text={this.props.user["first-name"]}
        single={true}
      />
    )
  }

  render() {
    return (
      <View>
        {this.renderAvatar()}
      </View>
    );
  }
}

export { UserInformations };
