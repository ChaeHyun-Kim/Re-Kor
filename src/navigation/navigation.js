import React from "react";
import Login from "../screens/Login/MainScreen/index";
import SignUpScreen from "../screens/Login/SignUpScreen/index";
import SelectTagScreen from "../screens/Login/SelectTagScreen";
import Explore from "../screens/Explore/MainScreen/index";
<<<<<<< HEAD:src/navigation/navigation.js
import Categories from "../screens/Categories";
import CourseList from "../screens/CourseList";
=======
import Categories from "../screens/Category/MainScreen/index";
import SelectCategoryScreen from "../screens/Category/SelectCategoryScreen/index";
import DetailedScreen from "../screens/Category/DetailedScreen/index";
import Courselist from "../screens/Courselist";
>>>>>>> d46f004da3448111f8bf1594695662d34557893b:src/navigations/Stack.js
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
<<<<<<< HEAD:src/navigation/navigation.js
      <Stack.Screen name="CourseList" component={CourseList} />
=======
      <Stack.Screen
        name="SelectCategoryScreen"
        component={SelectCategoryScreen}
      />
      <Stack.Screen name="DetailedScreen" component={DetailedScreen} />

      <Stack.Screen name="Courselist" component={Courselist} />
>>>>>>> d46f004da3448111f8bf1594695662d34557893b:src/navigations/Stack.js
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
