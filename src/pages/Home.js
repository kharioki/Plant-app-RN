import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/home/Header';
import ListCard from '../components/home/ListCard';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <ListCard title={'Recomended'} />
        <ListCard title={'Featured Plants'} bigger />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: 40,
  },
});
