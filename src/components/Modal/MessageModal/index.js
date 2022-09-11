import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { toSize } from "../../../globalStyle";

const MessageModal = ({ handleFunction }) => {
  return (
    <View style={styles.toastBack}>
      <View style={styles.toastContainer}>
        <Text style={styles.TitleText}>Coming soon</Text>
        <Text style={styles.subText}> please wait for a moment</Text>
      </View>
    </View>
  );
};

export default MessageModal;
