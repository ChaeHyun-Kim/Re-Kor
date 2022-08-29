import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { toSize } from "../../../globalStyle";
import ModalView from "../../../components/ModalView";
import { FormStyles } from "../../../styles/FormView";

import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NicknameCheckAPI } from "../../../api/Login";
import Country from "../../../components/Login/CountrySelect";
import { FormJoinAPI } from "../../../api/Login";

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
  const [DB_putBirth, set_putBirth] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [gender, setChangeGender] = useState(0);
  const [country, setCountry] = useState(null);
  const [language, setLanguage] = useState("");
  const [checkBox, setChangeCheckBox] = useState(false);
  const [background, setChangeBackGround] = useState(false);
  const [confirmCheck, setConfirmCheck] = useState("000000");

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    let year = String(date.getFullYear());
    let month = String(date.getMonth()).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    setChangeBirth(day + " " + monthNames[date.getMonth()] + " " + year);
    set_putBirth(year + "-" + month + "-" + day);
    changeArray(1);
  };

  const ClickCheckBox = () => {
    checkBox == false ? setChangeCheckBox(true) : setChangeCheckBox(false);
  };

  const handleCheckNickName = async () => {
    NicknameCheckAPI(nickname).then((response) => {
      changeArray(0);
    });
  };
  const changeArray = (index) => {
    const array = [];
    for (let i = 0; i < 6; i++) {
      if (index === i) array.push("1");
      else array.push(confirmCheck[i]);
    }
    setConfirmCheck(array.toString().replace(/,/g, ""));
  };

  useEffect(() => {
    if (gender != 0) changeArray(2);
    if (country != null) changeArray(3);
    if (language != "") changeArray(4);
    if (checkBox == true) changeArray(5);
  }, [gender, country, language, checkBox]);

  const handleSubmit = async () => {
    if (confirmCheck == 111111) {
      const userData = {
        name: nickname,
        birth: DB_putBirth,
        gender: gender === 2 ? 0 : 1,
        country: country.name,
        language: language === "Korean" ? 0 : 1,
      };
      FormJoinAPI(userData).then((response) => {
        if (response != null) {
          response === 1 ? navigation.navigate("SelectTagScreen") : null;
        }
      });
    }
  };

  return (
    <View style={background === false ? styles.fullscreen : styles.fullOpacity}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.MainText}>Join us</Text>
        <Text style={styles.MainSubText}>Create an account to get started</Text>
        {/* <ToastMessage
          visible={confirmCheck}
          setConfirmCheck={setConfirmCheck}
        /> */}
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
                confirmCheck[0] == 0
                  ? { borderColor: "#8F9098" }
                  : confirmCheck == 2
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

          <Country
            country={country}
            setCountry={setCountry}
            setChangeBackGround={setChangeBackGround}
          />

          <ModalView
            language={language}
            setLanguage={setLanguage}
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
            confirmCheck != "111111"
              ? { borderColor: "#FFCC00", borderWidth: 2 }
              : { backgroundColor: "#FFCC00" },
          ]}
        >
          <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit}>
            <Text
              style={[
                styles.BottomButtonText,
                confirmCheck != "111111"
                  ? { color: "#FFCC00" }
                  : { color: "#fff" },
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
