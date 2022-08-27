import React, { useEffect, useRef } from "react";
import { Animated, View, Text } from "react-native";
import { styles } from "./styles";
import { toSize } from "../../../globalStyle";
import { FontAwesome5 } from "@expo/vector-icons";

const ToastMessage = ({ visible, handleFunction, title, content }) => {
  const popAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    if (visible === 1) {
      Animated.timing(popAnim, {
        toValue: toSize(165),
        duration: 300,
        useNativeDriver: true,
      }).start();
      handlePopOutToast();
    }
  });

  const handlePopOutToast = () => {
    handleFunction(3);
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
      style={[styles.toastContainer, { transform: [{ translateY: popAnim }] }]}
    >
      <View style={styles.flexRow}>
        <FontAwesome5 name="check-circle" size={toSize(24)} color="#23A047" />
        <View style={styles.textView}>
          <Text style={styles.mainText}>{title}</Text>
          <Text style={styles.subText}>{content}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ToastMessage;
