import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

import { toSize } from "../../globalStyle";
import Modal from "react-native-modal";

const PopupView = ({
  visibleModal,
  setVisibleModal,
  setChangeBackGround,
  setChangeText,
}) => {
  const selectArray = ["English", "Korean", "cancel"];
  const closeModal = () => {
    setVisibleModal(false);
    setChangeBackGround(false);
  };
  const select1 = () => {
    setChangeText(selectArray[0]);
    closeModal();
  };

  const select2 = () => {
    setChangeText(selectArray[1]);
    closeModal();
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visibleModal}>
      <View style={styles.container}>
        <View style={styles.visibleView}>
          <TouchableOpacity activeOpacity={0.8} onPress={select1}>
            <Text style={styles.choose}>{selectArray[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={select2}>
            <Text style={styles.choose}>{selectArray[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={closeModal}>
            <Text style={styles.close}>{selectArray[2]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PopupView;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  visibleView: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: toSize(25),
  },
  choose: {
    fontSize: toSize(20),
    padding: toSize(10),
  },
  close: { fontSize: toSize(20), padding: toSize(10), borderTopWidth: 1 },
});
