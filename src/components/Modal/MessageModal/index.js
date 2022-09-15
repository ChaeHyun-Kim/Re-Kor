import React, { useEffect, useRef } from "react";
import Modal from "react-native-modal";
import { View, Text, Image } from "react-native";
import { styles, textUnderlineStyle } from "./styles";
import logo_character from "../../../images/logo_character.png";
import logo from "../../../images/logo_back.png";

const MessageModal = ({ visible, handleFunction }) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => handleFunction(!visible), 2000);
    }
  }, [visible]);
  return (
    <Modal isVisible={visible}>
      <View style={styles.toastBack}>
        <View style={styles.contentContainer}>
          <View style={styles.textView}>
            <Text style={styles.TitleText}>Coming soon</Text>
            <View style={textUnderlineStyle().container} />
          </View>
          <View style={styles.imageView}>
            <Image style={styles.logo} source={logo} />
            <Image style={styles.character} source={logo_character} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;
