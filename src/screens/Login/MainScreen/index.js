import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import LoginTypeSelect from "../../../components/Login/LoginTypeSelect";
import logo from "../../../images/logo_back.png";
import { FormStyles } from "../../../styles/FormView";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { loginAPI, formCheckAPI } from "../../../api/Login";

const LoginMainScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (phone != 0 && password != "") {
      loginAPI(phone, password).then((response) => {
        if (response === 1) {
          formCheckAPI().then((res) => {
            res === 1
              ? navigation.navigate("Explore")
              : navigation.navigate("SignUpScreen");
          });
        }
      });
    }
  };

  const handleCheckPhone = async () => {
    if (isNaN(phone) === false && (phone.length == 10 || phone.length == 11)) {
      phoneCheckAPI(phone).then((response) => {
        setConfirmCheckPhone(response);
      });
    } else setConfirmCheckPhone(0);
  };

  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image style={styles.logoView} source={logo} />
        <View style={styles.loginView}>
          <View
            style={[
              FormStyles.FormInput,
              FormStyles.Row,
              { borderColor: "#C5C6CC", marginBottom: toSize(16) },
            ]}
          >
            <FontAwesome
              name="phone"
              size={toSize(15)}
              color="#8F9098"
              style={{ marginRight: toSize(13) }}
            />
            <TextInput
              onChangeText={setPhone}
              value={phone.toString()}
              maxLength={11}
              returnKeyType="done"
              keyboardType="number-pad"
              placeholder="Phone Number"
            />
          </View>

          <View
            style={[
              FormStyles.FormInput,
              FormStyles.Row,
              { borderColor: "#C5C6CC", marginBottom: toSize(16) },
            ]}
          >
            <MaterialIcons
              name="lock"
              size={toSize(15)}
              color="#8F9098"
              style={{ marginRight: toSize(13) }}
            />
            <TextInput
              onChangeText={setPassword}
              value={password.toString()}
              placeholder="Password"
            />
          </View>

          <Text style={styles.forgotPW}>Forgot password?</Text>

          <View style={styles.LoginView}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
              <Text style={styles.BottomButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={[FormStyles.Row, { justifyContent: "center" }]}>
            <Text style={styles.subText}>Not a member? </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CreateAccountScreen")}
            >
              <Text style={styles.forgotPW}> Register now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.line} />

          <Text
            style={[
              styles.subText,
              { marginVertical: toSize(12), textAlign: "center" },
            ]}
          >
            Or
          </Text>
          <LoginTypeSelect type={"kakao"} />
        </View>
      </View>
    </View>
  );
};

export default LoginMainScreen;

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoView: {
    width: responsiveScreenWidth(50),
    resizeMode: "contain",
  },
  loginView: {
    marginTop: toSize(45),
    paddingHorizontal: toSize(24),
    width: "100%",
  },
  subText: {
    fontWeight: "400",
    fontSize: toSize(12),
    color: "#71727A",
  },
  forgotPW: { fontWeight: "600", fontSize: toSize(12), color: "#FFCC00" },
  LoginView: {
    width: "100%",
    height: toSize(48),
    marginVertical: toSize(24),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFCC00",
    borderWidth: 2,
  },
  BottomButtonText: {
    fontSize: toSize(16),
    fontWeight: "600",
    color: "#FFCC00",
  },
  line: {
    backgroundColor: "#D4D6DD",
    width: "100%",
    height: toSize(1),
    marginTop: toSize(25),
  },
});
