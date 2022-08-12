import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
const SpecialTipForm = ({ tip }) => {
  console.log(tip);
  return (
    <View style={styles.TipView}>
      <AntDesign name="staro" size={16} color="black" />
      <Text style={styles.TipText}>{tip}</Text>
    </View>
  );
};
export default SpecialTipForm;

const styles = StyleSheet.create({
  TipView: {
    flexDirection: "row",
    paddingVertical: toSize(3),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  TipText: {
    fontSize: toSize(10),

    paddingHorizontal: toSize(5),
    alignItems: "flex-end",
  },
});
