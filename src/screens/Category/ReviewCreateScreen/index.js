import React, { useState, useEffect } from "react";
import { NavigationContext, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { FormStyles } from "../../../styles/FormView";
import Header from "../../../components/MyHeader";
import { AntDesign } from "@expo/vector-icons";
import { toSize } from "../../../globalStyle";

export default function ReviewCreateScreen() {
  const [starArray, setStarArray] = useState([1, 0, 0, 0, 0]);
  const handelChangeArray = (index) => {
    let newArray = [];
    starArray.map((item, i) => {
      if (i <= index) newArray.push(1);
      else newArray.push(0);
    });
    setStarArray(newArray);
  };
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.container}>
        <View style={styles.TitleView}>
          <Text style={styles.MainText}>Title</Text>
          <View style={styles.row}>
            {starArray.map((item, index) => {
              return (
                <AntDesign
                  key={index}
                  name={item === 1 ? "star" : "staro"}
                  size={toSize(20)}
                  color={item === 1 ? "#FFCC00" : "#D4D6DD"}
                  onPress={() => handelChangeArray(index)}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.tagView}>
          <Text style={styles.SelectText}>
            Please select a tag for the place
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.tagView}>
          <Text style={styles.SelectText}>Please write a review</Text>
        </View>

        <TouchableOpacity style={[styles.BottomView]} activeOpacity={0.8}>
          <Text style={[styles.BottomButtonText]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
