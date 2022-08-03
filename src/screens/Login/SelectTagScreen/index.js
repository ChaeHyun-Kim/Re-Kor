import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WithLocalSvg } from "react-native-svg";
import { toSize } from "../../../globalStyle";
import Form from "../../../components/SignUpForm";
import { FormStyles } from "../../../styles/FormView";

import male from "../../../icons/icon_male.svg";
import female from "../../../icons/icon_female.svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SelectTagScreen({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.FirstView}>
          <Text style={styles.MainText}>Select tag</Text>
          <Text style={styles.MainSubText}>
            Please select the travel tag you want
          </Text>
        </View>

        <View style={styles.BottomView}>
          <TouchableOpacity
            style={styles.BottomButtonView}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Explore")}
          >
            <Text style={styles.BottomButtonText}>submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
  },
  container: {
    width: "90%",
    marginTop: toSize(44),
  },
  FirstView: {
    width: "80%",
    justifyContent: "space-between",
    marginTop: toSize(24),
  },
  MainText: {
    alignItems: "flex-start",
    fontSize: toSize(20),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "900",
  },
  MainSubText: {
    fontSize: toSize(12),
    color: "#71727A",
    fontWeight: "400",
    marginTop: toSize(4),
  },
  FormView: { marginTop: toSize(19) },
  BottomClickView: {
    flexDirection: "row",
  },
  BottomTextView: {
    marginLeft: toSize(12),
  },
  BottomView: {
    justifyContent: "flex-end",
  },

  BottomButtonView: {
    backgroundColor: "#FFCC00",
    borderRadius: toSize(12),
    height: toSize(48),
    alignItems: "center",
    justifyContent: "center",
  },
  BottomButtonText: {
    fontSize: toSize(12),
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
