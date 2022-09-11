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
  const [firstTerm, setFirstTerm] = useState(false);
  const [secondTerm, setSecondTerm] = useState(false);
  const [thirdTerm, setThirdTerm] = useState(false);
  const [confirmCheck, setConfirmCheck] = useState(false);

  const pressTerm = (num, move) => {
    if (num === "second") {
      setSecondTerm(!secondTerm);
      if (move) {
        navigation.navigate("TermsOfUse");
      }
    } else if (num === "third") {
      setThirdTerm(!thirdTerm);
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

  const handleConfirmClick = () => {
    if (!confirmCheck) {
      setFirstTerm(true);
      setSecondTerm(true);
      setThirdTerm(true);
    } else {
      setFirstTerm(false);
      setSecondTerm(false);
      setThirdTerm(false);
    }
  };

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
        <View style={{ width: "100%" }}>
          <Text style={styles.mainText}>Terms of Use</Text>
          <Text style={styles.subText}>
            Terms and conditions are required to use Re-Kor
          </Text>
        </View>

        <View style={styles.clickView}>
          <TouchableOpacity
            style={styles.FullTermsView}
            onPress={handleConfirmClick}
            activeOpacity={0.8}
          >
            <Ionicons
              name="checkbox"
              size={20}
              color={confirmCheck ? "#FFCC00" : "#D4D6DD"}
            />

            <Text style={styles.FullTermsText}>full Consent</Text>
          </TouchableOpacity>

          <View style={styles.borderline} />

          <View style={styles.w_100}>
            <View style={styles.TermsView}>
              <TouchableOpacity
                onPress={() => setFirstTerm(!firstTerm)}
                activeOpacity={0.8}
                style={styles.Row}
              >
                <Ionicons
                  name="checkbox"
                  size={20}
                  color={firstTerm ? "#FFCC00" : "#D4D6DD"}
                />

                <Text style={styles.TermsText}>
                  Agree to use for those over 14 years{"\n"}old
                  <Text style={styles.redText}> *</Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[styles.TermsView, { justifyContent: "space-between" }]}
            >
              <TouchableOpacity
                onPress={() => pressTerm("second", false)}
                activeOpacity={0.8}
                style={styles.Row}
              >
                <Ionicons
                  name="checkbox"
                  size={20}
                  color={secondTerm ? "#FFCC00" : "#D4D6DD"}
                />
                <Text style={styles.TermsText}>
                  Agree to Terms of Use
                  <Text style={styles.redText}> *</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => pressTerm("second", true)}
                activeOpacity={0.8}
              >
                <AntDesign
                  name="right"
                  size={12}
                  color={secondTerm ? "#FFCC00" : "#D4D6DD"}
                />
              </TouchableOpacity>
            </View>

            <View
              style={[styles.TermsView, { justifyContent: "space-between" }]}
            >
              <TouchableOpacity
                onPress={() => pressTerm("third", false)}
                activeOpacity={0.8}
                style={styles.Row}
              >
                <Ionicons
                  name="checkbox"
                  size={20}
                  color={thirdTerm ? "#FFCC00" : "#D4D6DD"}
                />
                <Text style={styles.TermsText}>
                  Consent to Collection And{"\n"}Use Of Personal Information
                  <Text style={styles.redText}> *</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => pressTerm("third", true)}
                activeOpacity={0.8}
              >
                <AntDesign
                  name="right"
                  size={12}
                  color={thirdTerm ? "#FFCC00" : "#D4D6DD"}
                />
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
          onPress={() => confirmCheck && handleSignUp()}
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
