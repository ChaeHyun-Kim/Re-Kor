import App from "./src/App";
import { Text } from "react-native";
import React from "react";
// import Loading from "./src/Loading";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default class extends React.Component {
  render() {
    return <App />;
  }
}
