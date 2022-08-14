import App from "./src/App";
import { Text, TextInput } from "react-native";
import React from "react";
import Loading from "./src/Loading";

// 글자/화면 크기 시스템 설정에 관계없이 고정
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount = async () => {
    // http://hccparkinson.duckdns.org:19737/pingtest
    // setTimeout(() => {
    //   fetch("http://hccparkinson.duckdns.org:19737/pingtest", {
    //     method: "GET",
    //   }).then((response) => {
    //     console.log(response.status);
    //     if (response.status === 200) this.setState({ isLoading: false });
    //   });
    // }, 3000);

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  };
  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return <App />;
    }
  }
}
