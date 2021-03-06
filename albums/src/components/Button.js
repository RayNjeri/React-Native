import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

const Button = ({ onPress, children }) => {
  const { buttonStyles, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
