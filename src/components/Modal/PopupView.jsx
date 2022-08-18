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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={select1}
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(60, 60, 67,0.3)",
            }}
          >
            <Text style={styles.choose}>{selectArray[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={select2}>
            <Text style={styles.choose}>{selectArray[1]}</Text>
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
    position: "absolute",
    top: "40%",
    left: "50%",
    marginLeft: -toSize(250) / 2,
    marginRight: -toSize(250) / 2,
    width: toSize(250),
    borderRadius: 8,
    backgroundColor: "#EDEDED",
    alignItems: "center",
    padding: toSize(8),
  },
  choose: {
    fontSize: toSize(17),
    fontWeight: "400",
    paddingHorizontal: toSize(24),
    paddingVertical: toSize(13),
    width: toSize(250),
  },
});
