import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Text } from "react-native";
import StackNavigation from "./navigation/Stack";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
