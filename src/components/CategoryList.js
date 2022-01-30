import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import categoryItems from '../data/categoryItems';
import COLORS from '../data/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryList = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <View style={styles.categoriesContainer}>
      {categoryItems.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={index}
          onPress={() => setSelectedCategoryIndex(index)}>
          <View
            style={[
              styles.categoryItemContainer,
              {
                backgroundColor:
                  selectedCategoryIndex === index
                    ? COLORS.primary
                    : COLORS.light,
              },
            ]}>
            <Icon
              name={item.iconName}
              size={25}
              color={
                selectedCategoryIndex === index ? COLORS.white : COLORS.primary
              }
            />
            <Text
              style={[
                styles.categoryName,
                {
                  color:
                    selectedCategoryIndex === index
                      ? COLORS.white
                      : COLORS.primary,
                },
              ]}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  categoryItemContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    padding: 7,
    borderRadius: 7,
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginLeft: 5,
  },
});

export default CategoryList;
