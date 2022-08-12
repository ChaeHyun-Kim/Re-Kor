import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { toSize } from "../../globalStyle.js";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { WithLocalSvg } from "react-native-svg";
import user_character from "../../icons/user_character.svg";

export default function UserInfo({ userData }) {
  return (
    <View style={styles.user_information}>
      <View style={styles.row_view}>
        <View style={styles.line}>
          <Text style={styles.welcome_text}>Hi, {userData[0].user_name}</Text>
          <Text style={styles.welcome_text}>
            I'll recommend it to you again!
          </Text>
        </View>
        <WithLocalSvg style={{ fontSize: toSize(60) }} asset={user_character} />
      </View>
      <View style={styles.row_view_unit}>
        <View style={styles.column_view}>
          <Text style={styles.unit}>USD</Text>
          <Text style={styles.unit_view}>1 $</Text>
        </View>
        <View style={styles.column_view}>
          <Text style={styles.unit}></Text>
          <Text style={styles.equal}>=</Text>
        </View>
        <View style={styles.column_view}>
          <Text style={styles.unit}>KRW</Text>
          <Text style={styles.unit_view}>1,301.00 won</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  user_information: {
    width: responsiveScreenWidth(90),
    height: toSize(131),
    marginTop: toSize(10),
    borderRadius: toSize(20),
    paddingHorizontal: toSize(24),
    paddingVertical: toSize(10),
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  row_view: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  row_view_unit: {
    flexDirection: "row",
    margin: toSize(5),
  },
  welcome_text: {
    fontSize: toSize(16),
    fontWeight: "300",
    lineHeight: toSize(25),
  },
  line: {
    borderBottomWidth: toSize(1),
    borderColor: "#EDEDED",
    paddingBottom: toSize(5),
  },
  unit_view: {
    fontSize: toSize(15),
    paddingHorizontal: toSize(11),
    paddingVertical: toSize(4),
    borderColor: "#D0D0D0",
    borderWidth: toSize(1),
    borderRadius: toSize(20),
    fontWeight: "400",
    color: "black",
  },
  unit: {
    fontWeight: "700",
    fontSize: toSize(10),
    color: "black",
  },
  column_view: {
    alignItems: "center",
    justifyContent: "center",
  },
  equal: {
    marginHorizontal: toSize(10),
  },
});
