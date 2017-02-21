import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, autoCapitalize, inputCustomStyle, keyboardType }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={[containerStyle, inputCustomStyle]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType ? keyboardType : 'default'}
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
    flex: 1
  },
  containerStyle: {
    height: 40,
    flexGrow: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  }
};

export { Input };
