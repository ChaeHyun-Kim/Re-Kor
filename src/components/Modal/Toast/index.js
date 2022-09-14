import React, { useEffect, useRef } from "react";
import { Animated, View, Text } from "react-native";
import { styles } from "./styles";
import { toSize } from "../../../globalStyle";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ToastMessage = ({
  visible,
  handleFunction,
  title,
  content,
  fail,
  course,
}) => {
  const popAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    const status = course ? -200 : 165;
    if (visible === 1) {
      Animated.timing(popAnim, {
        toValue: toSize(status),
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
      style={[
        styles.toastContainer,
        { transform: [{ translateY: popAnim }] },
        fail ? { backgroundColor: "#FFE2E5" } : { backgroundColor: "#ECFFF2" },
      ]}
    >
      <View style={styles.flexRow}>
        {!fail && (
          <FontAwesome5 name="check-circle" size={toSize(24)} color="#23A047" />
        )}

        {fail && (
          <MaterialIcons name="error" size={toSize(24)} color="#FF616D" />
        )}

        <View style={styles.textView}>
          <Text style={styles.mainText}>{title}</Text>
          <Text style={styles.subText}>{content}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ToastMessage;
