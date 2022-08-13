import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WebView } from "react-native-webview";
import { toSize } from "../../../globalStyle";

const LoginKakaoScreen = () => {
  const REST_API_KEY = "7bbd786d5c3c8d3701c44a4b860efd30";
  const REDIRECT_URI = "http://localhost:8080/kakao";

  const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

  const getCode = (target) => {
    const exp = "code=";
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      requestToken(requestCode);
    }
  };

  return (
    <View style={styles.fullscreen}>
      <StatusBar backgroundColor="#fff" />
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const data = event.nativeEvent.url;
          getCode(data);
        }}
      />
    </View>
  );
};

export default LoginKakaoScreen;

export const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    marginTop: toSize(44),
  },
});
