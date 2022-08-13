import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import Form from "./SignUpForm";
import PopupView from "./Modal/PopupView";

const ModalView = ({ title, placeholder, setChangeBackGround }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [text, setChangeText] = useState("");
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setVisibleModal(true);
          setChangeBackGround(true);
        }}
      >
        <Form title={title} placeholder={placeholder} text={text} />
      </TouchableOpacity>
      <PopupView
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        setChangeBackGround={setChangeBackGround}
        setChangeText={setChangeText}
      />
    </>
  );
};

export default ModalView;
