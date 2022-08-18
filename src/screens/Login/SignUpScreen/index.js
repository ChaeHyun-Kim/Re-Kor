import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { toSize } from "../../../globalStyle";
import Form from "../../../components/SignUpForm";
import ModalView from "../../../components/ModalView";
import { FormStyles } from "../../../styles/FormView";

import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ToastMessage from "../../../components/Modal/Toast";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function SignUpScreen({ navigation }) {
  const [nickname, setChangeNickname] = useState("");
  const [birth, setChangeBirth] = useState("Day / Month / Year");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [gender, setChangeGender] = useState(0);
  const [checkBox, setChangeCheckBox] = useState(false);
  const [background, setChangeBackGround] = useState(false);
  const [confirmCheck, setConfirmCheck] = useState(0); // 회원 가입 양식 기입되었는지 확인하는 변수

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setChangeBirth(
      String(date.getDate()).padStart(2, "0") +
        " " +
        monthNames[date.getMonth()] +
        " " +
        String(date.getFullYear())
    );
  };

  const ClickCheckBox = () => {
    checkBox == false ? setChangeCheckBox(true) : setChangeCheckBox(false);
  };

  const handleCheckNickName = () => {
    if (nickname) setConfirmCheck(1);
    else setConfirmCheck(2);
  };

  return (
    <View style={background === false ? styles.fullscreen : styles.fullOpacity}>
      <View style={styles.container}>
        <Text style={styles.MainText}>Join us</Text>
        <Text style={styles.MainSubText}>Create an account to get started</Text>
        <ToastMessage
          visible={confirmCheck}
          setConfirmCheck={setConfirmCheck}
        />
        <View style={styles.FormView}>
          <View style={FormStyles.FormOneView}>
            <View style={styles.RowView}>
              <Text style={FormStyles.FormTitleText}>Name</Text>
              <Text style={FormStyles.EssentialText}>*</Text>
            </View>
            <View
              style={[
                FormStyles.FormInput,
                FormStyles.RowView,
                confirmCheck === 0
                  ? { borderColor: "#8F9098" }
                  : confirmCheck === 2
                  ? { borderColor: "#FF0000" }
                  : { borderColor: "#23A047" },
              ]}
            >
              <TextInput
                onChangeText={setChangeNickname}
                value={nickname}
                placeholder="NickName"
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={FormStyles.checkNickName}
                onPress={handleCheckNickName}
              >
                <Text style={FormStyles.checkText}>Check Availability</Text>
              </TouchableOpacity>
            </View>
            {confirmCheck === 2 && (
              <View style={FormStyles.hideView}>
                <Text style={FormStyles.hideText}>
                  The same nickname exists. Please write another nickname
                </Text>
              </View>
            )}
          </View>

          <View style={FormStyles.FormOneView}>
            <View style={styles.RowView}>
              <Text style={FormStyles.FormTitleText}>Birth</Text>
              <Text style={FormStyles.EssentialText}>*</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setDatePickerVisibility(true);
              }}
            >
              <View style={FormStyles.FormItemSelectView}>
                <Text
                  style={
                    birth == "Day / Month / Year"
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
                  style={{ marginRight: toSize(5) }}
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

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={ClickCheckBox}
            style={styles.RowView}
          >
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
              <Text style={FormStyles.InfoText}>
                I've read and agree with the{" "}
                <Text style={FormStyles.FormPoint}>Terms and</Text> {"\n"}
                <Text style={FormStyles.FormPoint}>Conditions</Text> and the{" "}
                <Text style={FormStyles.FormPoint}>Privacy Policy</Text>.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.BottomView,
            confirmCheck
              ? { backgroundColor: "#FFCC00" }
              : { borderColor: "#FFCC00", borderWidth: 2 },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SelectTagScreen")}
          >
            <Text
              style={[
                styles.BottomButtonText,
                confirmCheck ? { color: "#FFFFFF" } : { color: "#FFCC00" },
              ]}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
