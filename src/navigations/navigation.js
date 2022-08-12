import React from "react";

import Login from "../screens/Login/MainScreen/index";
import SignUpScreen from "../screens/Login/SignUpScreen/index";
import SelectTagScreen from "../screens/Login/SelectTagScreen";
import Explore from "../screens/Explore/MainScreen/index";
import Categories from "../screens/Categories";
import CourseList from "../screens/CourseList";
import Wishlist from "../screens/Wishlist";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SelectTagScreen" component={SelectTagScreen} />

      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CourseList" component={CourseList} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
