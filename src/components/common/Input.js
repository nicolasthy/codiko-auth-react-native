import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 14,
    lineHeight: 18,
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#f7f7f7',
    marginLeft: 10,
    marginRight: 10
  },
  containerStyle: {
    height: 40,
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  }
};

export { Input };
