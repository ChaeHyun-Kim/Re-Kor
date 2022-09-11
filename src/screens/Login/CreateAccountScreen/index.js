import React, { useState, useEffect } from "react";
import { NavigationContext, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { FormStyles } from "../../../styles/FormView";
import { phoneCheckAPI, signUpAPI } from "../../../api/Login";

import ToastMessage from "../../../components/Modal/Toast";
import SignupModal from "../../../components/Modal/SignupModal";
import Header from "../../../components/MyHeader";

export default function CreateAccountScreen() {
  const navigation = useNavigation();
  const [phone, setChangePhone] = useState("");
  const [password, setPassword] = useState("");
  const [checkPW, setCheckPW] = useState("");

  const [confirmCheckPhone, setConfirmCheckPhone] = useState(true);
  const [confirmCheckPW, setConfirmCheckPW] = useState(0);
  const [confirmCheck, setConfirmCheck] = useState(0);
  const [checkTerm, setCheckTerm] = useState(false);

  useEffect(() => {
    let check = 0;
    if (confirmCheckPhone != 3) check++;
    if (confirmCheckPW != 3) check++;
    check === 0 ? setConfirmCheck(1) : setConfirmCheck(0);
  }, [phone, password, checkPW, confirmCheckPhone, confirmCheckPW]);

  useEffect(() => {
    if (password != "" && password === checkPW) {
      setConfirmCheckPW(1);
    } else {
      setConfirmCheckPW(0);
    }
  }, [checkPW]);

  const handleCheckPhone = async () => {
    if (isNaN(phone) === false && (phone.length == 10 || phone.length == 11)) {
      phoneCheckAPI(phone)
        .then((response) => {
          setConfirmCheckPhone(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else setConfirmCheckPhone(0);
  };

  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      {checkTerm && <SignupModal phone ={phone} password={password}/>}
      <Header />
      <View style={styles.container}>
        <Text style={styles.MainText}>Create Account</Text>
        <Text style={styles.MainSubText}>
          Please fill out your phone number and password
        </Text>
        <ToastMessage
          visible={confirmCheckPhone}
          handleFunction={setConfirmCheckPhone}
          title={"Success"}
          content={"Validation verified"}
        />
        <ToastMessage
          visible={confirmCheckPW}
          handleFunction={setConfirmCheckPW}
          title={"Success"}
          content={"Validation verified"}
        />
        <View style={styles.FormView}>
          <View style={FormStyles.FormOneView}>
            <Text style={FormStyles.FormTitleText}>Phone Number</Text>
            <View
              style={[
                FormStyles.FormInput,
                FormStyles.RowView,
                phone == "" || confirmCheckPhone === true
                  ? { borderColor: "#8F9098" }
                  : confirmCheckPhone === 0
                  ? { borderColor: "#FF0000" }
                  : { borderColor: "#23A047" },
              ]}
            >
              <TextInput
                onChangeText={setChangePhone}
                value={phone.toString()}
                maxLength={11}
                returnKeyType="done"
                keyboardType="number-pad"
                placeholder="Phone Number"
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={FormStyles.checkNickName}
                onPress={handleCheckPhone}
              >
                <Text style={FormStyles.checkText}>Check Availability</Text>
              </TouchableOpacity>
            </View>

            {confirmCheckPhone === 2 && (
              <View style={FormStyles.hideView}>
                <Text style={[FormStyles.hideText, { color: "#FF453A" }]}>
                  The same nickname exists. Please write another nickname
                </Text>
              </View>
            )}
          </View>

          <View style={FormStyles.FormOneView}>
            <Text style={FormStyles.FormTitleText}>Password</Text>

            <View
              style={[
                FormStyles.FormInput,
                FormStyles.RowView,
                { borderColor: "#8F9098" },
              ]}
            >
              <TextInput
                onChangeText={setPassword}
                value={password.toString()}
                placeholder="Password"
              />
            </View>

            <View
              style={[
                FormStyles.FormInput,
                FormStyles.RowView,
                styles.marginTop,
                checkPW == ""
                  ? { borderColor: "#8F9098" }
                  : confirmCheckPW === 0
                  ? { borderColor: "#FF0000" }
                  : { borderColor: "#23A047" },
              ]}
            >
              <TextInput
                onChangeText={setCheckPW}
                value={checkPW.toString()}
                placeholder="Confirm password"
              />
            </View>
            {checkPW != "" && (
              <View style={FormStyles.hideView}>
                <Text
                  style={[
                    FormStyles.hideText,
                    confirmCheckPW === 0
                      ? { color: "#FF453A" }
                      : { color: "#23A047" },
                  ]}
                >
                  {confirmCheckPW === 0
                    ? "Please make sure your passwords match"
                    : "Passwords match"}
                </Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.BottomView,
            confirmCheck
              ? { backgroundColor: "#FFCC00" }
              : { borderColor: "#FFCC00", borderWidth: 2 },
          ]}
          activeOpacity={0.8}
          onPress={() => {
            confirmCheck && setCheckTerm(true);
          }}
        >
          <Text
            style={[
              styles.BottomButtonText,
              confirmCheck ? { color: "#FFFFFF" } : { color: "#FFCC00" },
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
