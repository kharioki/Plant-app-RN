import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../constants';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Image
          style={styles.iconMenu}
          source={require('../../assets/icons/menu_icon.png')}
        />
        <View style={styles.menuTitle}>
          <Text style={styles.name}>Hey Tony Stark!!</Text>
          <View style={styles.avatar}>
            <Image
              style={styles.avatarImage}
              source={require('../../assets/img.png')}
            />
          </View>
          <View style={styles.dot} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <Text style={styles.text}>Search</Text>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/search_icon.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base,
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative',
  },
  searchBar: {
    backgroundColor: '#fff',
    position: 'absolute',
    width: '80%',
    bottom: -26,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: colors.base,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 20,
    color: colors.base,
  },
  icon: {
    tintColor: colors.base,
  },
  menu: {
    marginTop: 34,
    padding: 20,
  },
  iconMenu: {
    tintColor: '#fff',
  },
  menuTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#55ad85',
    padding: 5,
    borderRadius: 60,
  },
  avatarImage: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#96c8b5',
    position: 'absolute',
    top: 8,
    right: 3,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.base,
  },
});
