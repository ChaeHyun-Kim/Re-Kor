import React from "react";

import Login from "../screens/Login";
import Explore from "../screens/Explore";
import Categories from "../screens/Categories";
import Courselist from "../screens/Courselist";
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
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Courselist" component={Courselist} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
