import React from "react";
import { StyleSheet, Text } from "react-native";
import { toSize } from "../../globalStyle";

export default function TitleInfoScreen({ title, content }) {
  return (
    <>
      <Text style={styles.MainText}>{title}</Text>
      <Text style={styles.SubText}>{content}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  MainText: {
    fontSize: toSize(20),
    fontWeight: "700",
    color: "#1F2024",
  },
  SubText: {
    fontSize: toSize(14),
    fontWeight: "400",
    color: "#71727A",
    marginBottom: toSize(20),
  },
});
