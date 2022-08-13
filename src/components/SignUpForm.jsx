import React from "react";
import { Text, View } from "react-native";
import { toSize } from "../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import { FormStyles } from "../styles/FormView";

const SignUpForm = ({ title, placeholder, text }) => {
  return (
    <View style={FormStyles.FormOneView}>
      <View style={{ flexDirection: "row" }}>
        <Text style={FormStyles.FormTitleText}>{title}</Text>
        {title === "Language" && (
          <Text style={FormStyles.EssentialText}>*</Text>
        )}
      </View>
      <View style={FormStyles.FormItemSelectView}>
        <Text
          style={
            text == "" ? FormStyles.DefaultText : FormStyles.BirthInputText
          }
        >
          {text == "" ? placeholder : text}
        </Text>
        <AntDesign name="down" size={toSize(12)} color="#8F9098" />
      </View>
    </View>
  );
};
export default SignUpForm;
