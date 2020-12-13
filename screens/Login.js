import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/applogo.png')}
        resizeMode="cover"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <CustomButton text="Login" style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    backgroundColor: 'whitesmoke',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  button: {
    marginVertical: 8,
    marginHorizontal: 24,
  },
});

export default LoginScreen;
