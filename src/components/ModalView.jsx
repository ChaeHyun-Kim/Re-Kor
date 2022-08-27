import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import Form from "./SignUpForm";
import PopupView from "./Modal/PopupView";

const ModalView = ({ language, setLanguage, setChangeBackGround }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setVisibleModal(true);
        }}
      >
        <Form title={"Language"} placeholder={"Language"} text={language} />
      </TouchableOpacity>
      <PopupView
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        setChangeBackGround={setChangeBackGround}
        setChangeText={setLanguage}
      />
    </>
  );
};

export default ModalView;
