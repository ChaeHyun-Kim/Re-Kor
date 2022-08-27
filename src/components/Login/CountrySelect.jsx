import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { AntDesign } from "@expo/vector-icons";
import { FormStyles } from "../../styles/FormView";
import { toSize } from "../../globalStyle";

export default function CountrySelect({ country, setCountry }) {
  const [countryCode, setCountryCode] = useState("FR");
  const [withFilter] = useState(true);

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  return (
    <View style={FormStyles.FormOneView}>
      <View style={{ flexDirection: "row" }}>
        <Text style={FormStyles.FormTitleText}>Country</Text>
      </View>
      <View
        style={[
          FormStyles.FormItemSelectView,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <View style={FormStyles.Row}>
          <CountryPicker
            {...{
              onSelect,
              countryCode,
              withFilter, //글씨
            }}
            visible={false}
          />
          <Text
            style={
              country == null
                ? FormStyles.DefaultText
                : FormStyles.BirthInputText
            }
          >
            {country == null
              ? "Country"
              : JSON.stringify(country.name).slice(1, -1)}
          </Text>
        </View>
        <AntDesign name="down" size={toSize(12)} color="#8F9098" />
      </View>
    </View>
  );
}
