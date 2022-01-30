import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../data/colors';

const DetailsScreen = ({navigation, route}) => {
  const {name, image, price, rating, liked} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          name="chevron-left"
          size={25}
          onPress={navigation.goBack}
          color={COLORS.primary}
        />
        <Text style={styles.headerTitle}>Details</Text>
        <Icon name="dots-vertical" size={25} color={COLORS.primary} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={image} style={styles.backgroundImage}>
          <View style={styles.innerContainer}>
            <View style={styles.iconRatingContainer}>
              <Icon name="star" color={COLORS.yellow} size={17} />
              <Text style={styles.rating}>{rating}</Text>
            </View>
            <Text style={styles.reviews}>250 Reviews</Text>
          </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>
            Designed modern chair with luxury curves in an organic yet
            structured design that holds the sitting body and provides a feeling
            of relaxation while offering excellent back support.
          </Text>
          <View style={styles.footerContainer}>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityBtn}>
                <Icon name="plus" size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.quantityCount}>1</Text>
              <View style={styles.quantityBtn}>
                <Icon name="minus" size={20} color={COLORS.primary} />
              </View>
            </View>
          </View>
          <View style={styles.iconBtnContainer}>
            <View style={styles.heartIconContainer}>
              {liked ? (
                <Icon name="heart" color={COLORS.red} size={28} />
              ) : (
                <Icon name="heart-outline" color={COLORS.primary} size={28} />
              )}
            </View>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>Add To Cart</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: COLORS.primary,
  },
  backgroundImage: {
    height: 300,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  innerContainer: {
    height: 60,
    width: 70,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  reviews: {
    color: COLORS.white,
    fontSize: 9,
    marginTop: 5,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 35,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 20,
  },
  descriptionText: {
    color: COLORS.dark,
    fontSize: 12,
    lineHeight: 20,
  },
  footerContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.yellow,
  },
  quantityContainer: {
    height: 35,
    width: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityBtn: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityCount: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  iconBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    shadowOpacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 30,
  },
  btnContainer: {
    height: 40,
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: '500',
  },
});

export default DetailsScreen;
