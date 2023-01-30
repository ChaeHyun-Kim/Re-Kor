import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import Bottom from '../../../components/Bottom';
import TitleInfo from '../../../components/common/TitleInfoScreen';
import { WithLocalSvg } from 'react-native-svg';

import landscape from '../../../icons/icon_landscape.svg';
import culture from '../../../icons/icon_culture.svg';
import food from '../../../icons/icon_food.svg';
import shopping from '../../../icons/icon_shopping.svg';
import drama from '../../../icons/icon_drama.svg';
import leisure from '../../../icons/icon_enter.svg';

export default function Categories() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={'Category'} />
      <ScrollView contentContainerStyle={styles.MainView}>
        <TitleInfo title={'Category'} content={'Choose your own category'} />
        <View style={styles.ButtonView}>
          <View style={styles.HorizontalView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate('SelectCategoryScreen', {
                  Category: 'K-LANDSCAPE',
                  cat: 0,
                })
              }
            >
              <WithLocalSvg asset={landscape} />
              <Text style={styles.Category_text}>K-LANDSCAPE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate('SelectCategoryScreen', {
                  Category: 'K-CULTURE',
                  cat: 1,
                })
              }
            >
              <WithLocalSvg asset={culture} />
              <Text style={styles.Category_text}>K-CULTURE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.HorizontalView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate('SelectCategoryScreen', {
                  Category: 'K-FOOD',
                  cat: 2,
                })
              }
            >
              <WithLocalSvg asset={food} />
              <Text style={styles.Category_text}>K-FOOD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate('SelectCategoryScreen', {
                  Category: 'K-SHOPPING',
                  cat: 3,
                })
              }
            >
              <WithLocalSvg asset={shopping} />
              <Text style={styles.Category_text}>K-SHOPPING</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.HorizontalView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate('SelectCategoryScreen', {
                  Category: 'K-DRAMA',
                  cat: 5,
                })
              }
            >
              <WithLocalSvg asset={drama} />
              <Text style={styles.Category_text}>K-DRAMA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate('SelectCategoryScreen', {
                  Category: 'K-ENTERTAINMENT',
                  cat: 7,
                })
              }
            >
              <WithLocalSvg asset={leisure} />
              <Text style={styles.Category_text}>K-ENTERTAINMENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Bottom num={2} />
    </View>
  );
}
