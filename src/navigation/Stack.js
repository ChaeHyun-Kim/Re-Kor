import React from "react";

import Login from "../screens/Login/MainScreen/index";
import SignUpScreen from "../screens/Login/SignUpScreen/index";
import SelectTagScreen from "../screens/Login/SelectTagScreen";
import Explore from "../screens/Explore/MainScreen/index";
import Categories from "../screens/Categories";
import CourseList from "../screens/CourseList/MainScreen/index";
import Wishlist from "../screens/WishList/MainScreen/index";
import MakeCourse from "../screens/MakeCourse/MainScreen";
import SearchTravelScreen from "../screens/Explore/SearchTravelScreen/index";
import MyPageScreen from "../screens/Explore/MyPageScreen/index";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {/* Login, 회원가입 화면 */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SelectTagScreen" component={SelectTagScreen} />

      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="SearchTravelScreen" component={SearchTravelScreen} />
      <Stack.Screen name="MyPageScreen" component={MyPageScreen} />

      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CourseList" component={CourseList} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="MakeCourse" component={MakeCourse} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
