import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
