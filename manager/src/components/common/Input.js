import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    paddingRight: 5,
    paddingLeft: 5,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, containerStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export { Input };
