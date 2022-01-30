import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../data/colors';

const PopularProductCard = ({product}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <Icon
          name="heart"
          size={15}
          color={product.liked ? COLORS.red : COLORS.primary}
        />
      </View>
      <Image source={product.image} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>{product.price}</Text>
          <View style={styles.bottomRightContainer}>
            <Icon name="star" size={17} color={COLORS.yellow} />
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    height: 90,
    width: deviceSize.width - 100,
    backgroundColor: COLORS.white,
    shadowOpacity: 0.4,
    flexDirection: 'row',
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    shadowOpacity: 0.4,
    position: 'absolute',
    top: 8,
    right: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightContainer: {
    marginLeft: 10,
    paddingVertical: 15,
  },
  name: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  price: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  bottomRightContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default PopularProductCard;
