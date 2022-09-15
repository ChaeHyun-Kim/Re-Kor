import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../globalStyle";
import { AntDesign } from "@expo/vector-icons";

const SpecialTipForm = ({ infoName, infoText }) => {
  return (
    <View style={styles.TipView}>
      <AntDesign name="staro" size={toSize(16)} color="#000000" />
      <Text style={[styles.TipText, { paddingHorizontal: toSize(5) }]}>
        {infoName}:
      </Text>
      <Text style={styles.TipText}>{infoText}</Text>
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
    paddingVertical: toSize(4),
    width: "50%",
  },
  TipText: {
    fontSize: toSize(13),
    fontWeight: "400",
    alignItems: "flex-end",
  },
});
