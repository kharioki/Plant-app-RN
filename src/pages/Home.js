import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/home/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
