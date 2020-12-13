import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.button, props.style]}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#16697a',
    padding: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
});

export default CustomButton;
