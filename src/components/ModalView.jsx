import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

import { toSize } from "../globalStyle";
import Modal from "react-native-modal";
import Form from "./SignUpForm";

const ModalView = ({ title, placeholder, setChangeBackGround }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [text, setChangeText] = useState("");
  const closeModal = () => {
    setVisibleModal(false);
    console.log("클릭");
    setChangeBackGround(false);
  };
  const textClick = () => {
    console.log("클릭");
    setChangeText("Hello");
    setVisibleModal(false);
    setChangeBackGround(false);
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setVisibleModal(true);
          setChangeBackGround(true);
        }}
      >
        <Form title={title} placeholder={placeholder} text={text} />
      </TouchableOpacity>
      <SafeAreaView style={{ flex: 1 }}>
        <Modal animationType="slide" transparent={true} visible={visibleModal}>
          <View style={styles.container}>
            <View style={styles.visibleView}>
              <Text style={{ fontSize: 20 }}>Modal 화면입니다.</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={textClick}>
                <Text>Modal 화면</Text>
              </TouchableOpacity>
              <Button title="닫기" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default ModalView;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  visibleView: {
    flex: 0.5,
    borderRadius: 5,
    borderColor: "#cccccc",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    padding: 5,
  },
});
