import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./styles";

const CenterModal = ({
  visible,
  title,
  children,
  leftText = "Cancel",
  leftPress,
  rightText = "Confirm",
  rightPress,
}) => {
  return (
    <Modal isVisible={visible} onBackButtonPress={leftPress}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {children}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={leftPress}>
            <Text style={styles.leftView}>{leftText}</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.button} onPress={rightPress}>
            <Text style={styles.rightView}>{rightText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CenterModal;
