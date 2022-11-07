import React from 'react';

import Login from '../screens/Login/MainScreen/index';
import CreateAccountScreen from '../screens/Login/CreateAccountScreen';
import LoginKakaoScreen from '../screens/Login/KakaoScreen';
import SignUpScreen from '../screens/Login/SignUpScreen/index';
import SelectTagScreen from '../screens/Login/SelectTagScreen';
import Explore from '../screens/Explore/MainScreen/index';
import Categories from '../screens/Category/MainScreen/index';
import CourseList from '../screens/CourseList/MainScreen/index';
import MoveFolder from '../screens/CourseList/MoveFolder/index';
import MoveCourseOrder from '../screens/CourseList/MoveCourseOrder/index';
import WishList from '../screens/WishList/MainScreen';
import MakeCourse from '../screens/MakeCourse/MainScreen';
import SelectPlaceScreen from '../screens/MakeCourse/SelectPlaceScreen';
import SearchTravelScreen from '../screens/Explore/SearchTravelScreen/index';
import MyPageScreen from '../screens/Explore/MyPageScreen/index';
import TermsOfUse from '../screens/Login/TermsScreen/TermsOfUse/index';
import PersonalInfoTerms from '../screens/Login/TermsScreen/PersonalInfoTerms/index';
import SelectCategoryScreen from '../screens/Category/SelectCategoryScreen/index';
import ReviewCreateScreen from '../screens/Category/ReviewCreateScreen';
import DetailedScreen from '../screens/Category/DetailedScreen/index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelectTagScreen" component={SelectTagScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
      <Stack.Screen name="LoginKakaoScreen" component={LoginKakaoScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="SearchTravelScreen" component={SearchTravelScreen} />
      <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
      <Stack.Screen
        name="SelectCategoryScreen"
        component={SelectCategoryScreen}
      />
      <Stack.Screen name="ReviewCreateScreen" component={ReviewCreateScreen} />
      <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CourseList" component={CourseList} />
      <Stack.Screen name="MoveFolder" component={MoveFolder} />
      <Stack.Screen name="MoveCourseOrder" component={MoveCourseOrder} />
      <Stack.Screen name="WishList" component={WishList} />
      <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
      <Stack.Screen name="PersonalInfoTerms" component={PersonalInfoTerms} />

      <Stack.Screen
        name="MakeCourse"
        component={MakeCourse}
        initialParams={{ params: [] }}
      />
      <Stack.Screen
        name="SelectPlaceScreen"
        component={SelectPlaceScreen}
        initialParams={{ params: [] }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
