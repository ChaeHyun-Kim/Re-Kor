import App from "./src/App";
import { Text, TextInput } from "react-native";
import React from "react";
// import Loading from "./src/Loading";

// 글자/화면 크기 시스템 설정에 관계없이 고정
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default class extends React.Component {
  render() {
    return <App />;
  }
}
