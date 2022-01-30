import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../data/colors';

const TopProductCard = ({product, handleSelect}) => {
  return (
    <Pressable onPress={handleSelect}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
          <View style={styles.iconContainer}>
            <Icon
              name="heart"
              size={15}
              color={product.liked ? COLORS.red : COLORS.primary}
            />
          </View>
        </View>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>{product.price}</Text>
          <View style={styles.bottomRightContainer}>
            <Icon name="star" color={COLORS.yellow} size={17} />
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    height: 190,
    width: deviceSize.width / 2.5,
    shadowOpacity: 0.4,
    marginRight: 10,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    shadowOpacity: 0.4,
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  bottomRightContainer: {
    flexDirection: 'row',
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default TopProductCard;
