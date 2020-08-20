import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {colors} from '../../constants';

const w = Dimensions.get('screen').width;
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
export default function ListCard({bigger, title}) {
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <View style={styles.itemWrapper}>
          <Image
            style={bigger ? styles.imageBigger : styles.image}
            source={item.image}
          />
          <View style={styles.itemBottom}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>{item.text}</Text>
              <Text style={styles.itemType}>{item.type}</Text>
            </View>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.headerMoreContainer}>
          <Text style={styles.headerMore}>More</Text>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {data.map(e => renderItem(e))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerMoreContainer: {
    backgroundColor: colors.base,
    borderRadius: 14,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMore: {
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    padding: 20,
    paddingRight: 0,
  },
  itemWrapper: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: colors.base,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  image: {
    width: w / 2.2,
    height: ((w / 2.2) * 16) / 9 - 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  imageBigger: {
    width: w / 1.5,
    height: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemBottom: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemPrice: {
    color: colors.base,
    fontWeight: '500',
  },
  itemText: {
    fontWeight: '500',
  },
  itemType: {
    color: '#98c8b5',
  },
});
