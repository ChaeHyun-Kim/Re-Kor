import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { toSize } from "../../globalStyle.js";
import { FontAwesome } from "@expo/vector-icons";

export default function FilterCheckView({ click, setClick }) {
  return (
    <View style={styles.FilterView}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setClick("recommended")}
        style={[
          styles.button,
          click === "recommended"
            ? { backgroundColor: "#FFCC00" }
            : { backgroundColor: "#fff" },
        ]}
      >
        <FontAwesome
          name={"thumbs-up"}
          size={toSize(11)}
          color={click === "recommended" ? "#FFFFFF" : "#71727A"}
        />
        <Text
          style={[
            styles.buttonText,
            click === "recommended" ? { color: "#fff" } : { color: "#71727A" },
          ]}
        >
          Recommended
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setClick("wish")}
        style={[
          styles.button,
          click === "wish"
            ? { backgroundColor: "#FFCC00" }
            : { backgroundColor: "#fff" },
        ]}
      >
        <FontAwesome
          name={"heart-o"}
          size={toSize(11)}
          color={click === "wish" ? "#FFFFFF" : "#71727A"}
        />
        <Text
          style={[
            styles.buttonText,
            click === "wish" ? { color: "#fff" } : { color: "#71727A" },
          ]}
        >
          Wish
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  FilterView: {
    marginTop: toSize(5),
    height: toSize(40),
    width: responsiveScreenWidth(100) - toSize(48),
    borderColor: "#FFCC00",
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    padding: toSize(4),
  },
  button: {
    flex: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: toSize(12),
    fontWeight: "700",
    marginLeft: toSize(6),
  },
});
