import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, disabled }) => {
  const { buttonStyle, textStyle, disabledStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={disabled ? disabledStyle : buttonStyle}
      disabled={disabled}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#9dc02d',
    borderWidth: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  disabledStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#cedf96',
    borderWidth: 0,
    marginLeft: 10,
    marginRight: 10
  }
};

export { Button };
