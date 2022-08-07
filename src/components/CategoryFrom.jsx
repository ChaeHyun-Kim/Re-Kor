import React, { useState } from "react";
import { Text, View } from "react-native";
import { toSize } from "../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import { FormStyles } from "../styles/FormView";

const CategoryForm = ({ title, placeholder }) => {
  return (
    <View style={FormStyles.FormOneView}>
      <Text style={FormStyles.FormTitleText}>{title}</Text>
      <View style={FormStyles.FormItemSelectView}>
        <Text style={FormStyles.DefaultText}>{placeholder}</Text>
        <AntDesign name="down" size={12} color="#8F9098" />
      </View>
    </View>
  );
};
export default CategoryForm;
