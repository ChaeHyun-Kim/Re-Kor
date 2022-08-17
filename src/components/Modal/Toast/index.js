import React, { useEffect, useRef } from "react";
import { Animated, View, Text } from "react-native";
import { styles } from "./styles";
import { toSize } from "../../../globalStyle";
import { FontAwesome5 } from "@expo/vector-icons";

const ToastMessage = ({ visible, setConfirmCheck }) => {
  const popAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    if (visible === 1) {
      Animated.timing(popAnim, {
        toValue: toSize(165), // 토스트를 지정 위치까지 내립니다.
        duration: 300, // 내려오는데 걸리는 시간입니다.
        useNativeDriver: true,
      }).start();
      handlePopOutToast();
    }
  });

  const handlePopOutToast = () => {
    setConfirmCheck(3);
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: -500, // 토스트를 원지점까지 올립니다.
        duration: 300, // 올라가는데 걸리는 시간입니다.
        useNativeDriver: true,
      }).start();
    }, 2000); // 설정한 시간(1초)뒤에 함수를 실행합니다.
  };

  return (
    <Animated.View
      style={[styles.toastContainer, { transform: [{ translateY: popAnim }] }]}
    >
      <View style={styles.flexRow}>
        <FontAwesome5 name="check-circle" size={toSize(24)} color="#23A047" />
        <View style={styles.textView}>
          <Text style={styles.mainText}>Success</Text>
          <Text style={styles.subText}>Validation verified</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ToastMessage;
