import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Touchable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { toSize } from "../../../globalStyle";
import { signUpAPI } from "../../../api/Login";

const SignupModal = ({ phone, password }) => {
  const navigation = useNavigation();
  const [firstTerm, setFirstTerm] = useState(0);
  const [secondTerm, setSecondTerm] = useState(0);
  const [thirdTerm, setThirdTerm] = useState(0);
  const [confirmCheck, setConfirmCheck] = useState(0);
  const pressTerm = (num, move) => {
    if (num === "second") {
      setSecondTerm(secondTerm ? false : true);
      if (move) {
        navigation.navigate("TermsOfUse");
      }
    } else if (num === "third") {
      setThirdTerm(thirdTerm ? false : true);
      if (move) {
        navigation.navigate("PersonalInfoTerms");
      }
    }
  };
  useEffect(() => {
    if (firstTerm && secondTerm && thirdTerm) {
      setConfirmCheck(true);
    } else {
      setConfirmCheck(false);
    }
  }, [firstTerm, secondTerm, thirdTerm]);

  useEffect(() => {
    if (confirmCheck) {
      setFirstTerm(true);
      setSecondTerm(true);
      setThirdTerm(true);
    } else {
      setFirstTerm(false);
      setSecondTerm(false);
      setThirdTerm(false);
    }
  }, [confirmCheck]);

  const handleSignUp = async () => {
    if (confirmCheck === true) {
      signUpAPI(phone, password)
        .then((response) => {
          if (response != null) {
            response === 1 ? navigation.navigate("Login") : null;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.toastBack}>
      <View style={styles.toastContainer}>
        <View style={{ alignItems: "flex-start", flex: 1 }}>
          <Text style={styles.mainText}>Terms of Use</Text>
          <Text style={styles.subText}>
            Terms and conditions are required to use Re-Kor
          </Text>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.FullTermsView}
              onPress={() => {
                setConfirmCheck(confirmCheck ? false : true);
              }}
              activeOpacity={0.8}
            >
              {(confirmCheck && (
                <Ionicons name="checkbox" size={20} color="#FFCC00" />
              )) || <Ionicons name="checkbox" size={20} color="#D4D6DD" />}

              <Text style={styles.FullTermsText}>full Consent</Text>
            </TouchableOpacity>
            <View style={styles.borderline}></View>
            <View style={styles.TermsView}>
              <TouchableOpacity
                onPress={() => {
                  setFirstTerm(firstTerm ? false : true);
                }}
                activeOpacity={0.8}
                style={{ flexDirection: "row" }}
              >
                {(firstTerm && (
                  <Ionicons name="checkbox" size={20} color="#FFCC00" />
                )) || <Ionicons name="checkbox" size={20} color="#D4D6DD" />}
                <Text style={styles.TermsText}>
                  Agree to use for those over 14 years old
                  <Text style={{ color: "red", fontSize: toSize(16) }}> *</Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[styles.TermsView, { justifyContent: "space-between" }]}
            >
              <TouchableOpacity
                onPress={() => {
                  pressTerm("second", false);
                }}
                activeOpacity={0.8}
                style={{ flexDirection: "row" }}
              >
                {(secondTerm && (
                  <Ionicons name="checkbox" size={20} color="#FFCC00" />
                )) || <Ionicons name="checkbox" size={20} color="#D4D6DD" />}
                <Text style={styles.TermsText}>
                  Agree to Terms of Use
                  <Text style={{ color: "red", fontSize: toSize(16) }}> *</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  pressTerm("second", true);
                }}
                activeOpacity={0.8}
              >
                {(secondTerm && (
                  <AntDesign name="right" size={12} color="#FFCC00" />
                )) || <AntDesign name="right" size={12} color="#D4D6DD" />}
              </TouchableOpacity>
            </View>
            <View
              style={[styles.TermsView, { justifyContent: "space-between" }]}
            >
              <TouchableOpacity
                // onPress={() => {
                //   setThirdTerm(thirdTerm ? false : true);
                // }}
                onPress={() => {
                  pressTerm("third", false);
                }}
                activeOpacity={0.8}
                style={{ flexDirection: "row" }}
              >
                {(thirdTerm && (
                  <Ionicons name="checkbox" size={20} color="#FFCC00" />
                )) || <Ionicons name="checkbox" size={20} color="#D4D6DD" />}
                <Text style={styles.TermsText}>
                  Consent to Collection and Use of Personal Information
                  <Text style={{ color: "red", fontSize: toSize(16) }}> *</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  pressTerm("third", true);
                }}
                activeOpacity={0.8}
              >
                {(thirdTerm && (
                  <AntDesign name="right" size={12} color="#FFCC00" />
                )) || <AntDesign name="right" size={12} color="#D4D6DD" />}
              </TouchableOpacity>
            </View>
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
            confirmCheck && handleSignUp();
          }}
        >
          <Text
            style={[
              styles.BottomButtonText,
              confirmCheck ? { color: "#FFFFFF" } : { color: "#FFCC00" },
            ]}
          >
            Agree and Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupModal;
