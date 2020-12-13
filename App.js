import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginScreen from './screens/Login';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen style={styles.container} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
