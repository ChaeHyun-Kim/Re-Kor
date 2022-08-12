import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import Form from "../../../components/SignUpForm";
import ModalView from "../../../components/ModalView";
import { FormStyles } from "../../../styles/FormView";

import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SignUp } from "./function";

export default function SignUpScreen({ navigation }) {
  const [nickname, setChangeNickname] = useState("");
  const [birth, setChangeBirth] = useState("DD/MM/YYYY");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [gender, setChangeGender] = useState(0);
  const [checkBox, setChangeCheckBox] = useState(false);
  const [background, setChangeBackGround] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setChangeBirth(
      String(date.getDate()).padStart(2, "0") +
        "/" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "/" +
        String(date.getFullYear())
    );
  };

  const ClickCheckBox = () => {
    checkBox == false ? setChangeCheckBox(true) : setChangeCheckBox(false);
  };

  return (
    <View style={background === false ? styles.fullscreen : styles.fullOpacity}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.FirstView}>
          <Text style={styles.MainText}>Sign up</Text>
          <Text style={styles.MainSubText}>
            Create an account to get started
          </Text>
        </View>
        <View style={styles.FormView}>
          <View style={FormStyles.FormOneView}>
            <Text style={FormStyles.FormTitleText}>Name</Text>
            <TextInput
              style={FormStyles.FormInput}
              onChangeText={setChangeNickname}
              value={nickname}
              placeholder="NickName"
            />
          </View>

          <View style={FormStyles.FormOneView}>
            <Text style={FormStyles.FormTitleText}>Birth</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setDatePickerVisibility(true);
              }}
            >
              <View style={FormStyles.FormItemSelectView}>
                <Text
                  style={
                    birth == "DD/MM/YYYY"
                      ? FormStyles.DefaultText
                      : FormStyles.BirthInputText
                  }
                >
                  {birth}
                </Text>
              </View>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <View style={FormStyles.FormOneView}>
            <Text style={FormStyles.FormTitleText}>Gender</Text>
            <View style={FormStyles.RowView}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setChangeGender(1);
                }}
                style={
                  gender == 1
                    ? FormStyles.GenderClickView
                    : FormStyles.GenderView
                }
              >
                <Foundation
                  name="male-symbol"
                  size={toSize(20)}
                  color={gender == 1 ? "#FFCC00" : "#8F9098"}
                  style={{ marginRight: toSize(4) }}
                />

                <Text
                  style={
                    gender == 1 ? FormStyles.ClickText : FormStyles.DefaultText
                  }
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setChangeGender(2);
                }}
                style={
                  gender == 2
                    ? FormStyles.GenderClickView
                    : FormStyles.GenderView
                }
              >
                <Foundation
                  name="female-symbol"
                  size={toSize(20)}
                  color={gender == 2 ? "#FFCC00" : "#8F9098"}
                  style={{ marginRight: toSize(4) }}
                />

                <Text
                  style={
                    gender == 2 ? FormStyles.ClickText : FormStyles.DefaultText
                  }
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ModalView
            title={"Country"}
            placeholder={"Country"}
            setChangeBackGround={setChangeBackGround}
          />
          <ModalView
            title={"Language"}
            placeholder={"Language"}
            setChangeBackGround={setChangeBackGround}
          />

          <TouchableOpacity activeOpacity={0.8} onPress={ClickCheckBox}>
            <View style={styles.BottomClickView}>
              <MaterialCommunityIcons
                name={
                  checkBox == false
                    ? "checkbox-blank-outline"
                    : "checkbox-intermediate"
                }
                size={toSize(24)}
                color={checkBox == false ? "#C5C6CC" : "#FFCC00"}
              />
              <View style={styles.BottomTextView}>
                <Text style={FormStyles.DefaultText}>
                  I've read and agree with the{" "}
                  <Text style={FormStyles.FormPoint}>Terms and</Text> {"\n"}
                  <Text style={FormStyles.FormPoint}>Conditions</Text> and the{" "}
                  <Text style={FormStyles.FormPoint}>Privacy Policy</Text>.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.BottomView}>
          <TouchableOpacity
            style={styles.BottomButtonView}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SelectTagScreen")}
          >
            <Text style={styles.BottomButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingBottom: toSize(24),
  },
  fullOpacity: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    opacity: 0.4,
    paddingBottom: toSize(24),
  },
  container: {
    width: "90%",
    marginTop: toSize(44),
  },
  FirstView: {
    width: "80%",
    justifyContent: "space-between",
    marginTop: toSize(24),
  },
  MainText: {
    alignItems: "flex-start",
    fontSize: toSize(20),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "900",
  },
  MainSubText: {
    fontSize: toSize(12),
    color: "#71727A",
    fontWeight: "400",
    marginTop: toSize(4),
  },
  FormView: { marginTop: toSize(19) },
  BottomClickView: {
    flexDirection: "row",
  },
  BottomTextView: {
    marginLeft: toSize(12),
  },
  BottomView: {
    justifyContent: "flex-end",
    height: responsiveScreenHeight(18),
  },

  BottomButtonView: {
    backgroundColor: "#FFCC00",
    borderRadius: toSize(12),
    height: toSize(48),
    alignItems: "center",
    justifyContent: "center",
  },
  BottomButtonText: {
    fontSize: toSize(12),
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
