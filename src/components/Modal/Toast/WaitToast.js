import React, { useEffect, useRef } from "react";
import { Animated, View, Text } from "react-native";
import { styles } from "./styles";
import { toSize } from "../../../globalStyle";
import { MaterialIcons } from "@expo/vector-icons";

const WaitToastMessage = ({
  visible,
  handleFunction,
  title,
  content,
  fail,
}) => {
  const popAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    if (visible === true) {
      Animated.timing(popAnim, {
        toValue: toSize(165),
        duration: 300,
        useNativeDriver: true,
      }).start();
      handlePopOutToast();
    }
  });

  const handlePopOutToast = () => {
    handleFunction(false);
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: -500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  return (
    <Animated.View
      style={[
        styles.WaittoastContainer,
        { transform: [{ translateY: popAnim }] },
        fail ? { backgroundColor: "#FFE2E5" } : { backgroundColor: "#FFE2E5" },
      ]}
    >
      <View style={styles.flexRow}>
        <MaterialIcons name="error" size={toSize(24)} color="#FF616D" />
        <View style={styles.textView}>
          <Text style={styles.mainText}>{title}</Text>
          <Text style={styles.subText}>{content}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default WaitToastMessage;
