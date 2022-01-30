import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryList from '../components/CategoryList';
import PopularProductCard from '../components/PopularProductCard';
import TopProductCard from '../components/TopProductCard';
import COLORS from '../data/colors';
import products from '../data/products';

const HomeScreen = ({navigation}) => {
  const handleSelect = furniture => {
    navigation.navigate('DetailsScreen', furniture);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="sort-variant" size={28} color={COLORS.primary} />
        <Icon name="cart-outline" size={28} color={COLORS.primary} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Best Furniture For Your Home.</Text>
        <View style={styles.inputBtnContainer}>
          <View style={styles.searchInputContainer}>
            <Icon name="magnify" size={25} color={COLORS.grey} />
            <TextInput placeholder="Search" />
          </View>
          <View style={styles.sortBtn}>
            <Icon name="tune" color={COLORS.white} size={25} />
          </View>
        </View>
        <Text style={styles.title}>Categories</Text>
        <CategoryList />
        <Text style={styles.title}>Top Furniture</Text>
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => (
            <TopProductCard
              product={item}
              handleSelect={() => handleSelect(item)}
            />
          )}
        />
        <Text style={styles.title}>Popular</Text>
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => <PopularProductCard product={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    width: '55%',
    lineHeight: 30,
    paddingHorizontal: 20,
  },
  inputBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  searchInputContainer: {
    backgroundColor: COLORS.light,
    height: 50,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  sortBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 50,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  flatList: {
    paddingLeft: 20,
  },
});

export default HomeScreen;
