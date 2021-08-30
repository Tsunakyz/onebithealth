import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Main from './src/components/Main';
import Title from './src/components/Title'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80
  },
});
