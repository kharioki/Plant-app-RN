import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants';

const data = [
  {
    id: 1,
    image: require('../../assets/image_1.png'),
    text: 'SAMANTHA',
    price: '$400',
    type: 'INDOOR',
  },
  {
    id: 2,
    image: require('../../assets/image_2.png'),
    text: 'SAMANTHA',
    price: '$540',
    type: 'INDOOR',
  },
  {
    id: 3,
    image: require('../../assets/image_3.png'),
    text: 'SAMANTHA',
    price: '$300',
    type: 'INDOOR',
  },
];
export default function ListCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recomended</Text>
        <View style={styles.headerMoreContainer}>
          <Text style={styles.headerMore}>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  header: {
    flexDirection: 'row',
  },
  headerMoreContainer: {
    backgroundColor: colors.base,
    borderRadius: 14,
    paddingHorizontal: 15,
  },
  headerMore: {
    fontWeight: '800',
    color: '#fff',
  },
});
