import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { FormStyles } from "../../styles/FormView";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";

import ic_user from "../../icons/ic_user.svg";

export default function Review({ data }) {
  const dateChange = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "." + month + "." + day;
  };
  
  return (
    <View style={[FormStyles.FormOneView, { marginVertical: toSize(20) }]}>
      <View style={FormStyles.Row}>
        <WithLocalSvg asset={ic_user} height={toSize(45)} width={toSize(45)} />
        <View style={styles.userView}>
          <Text style={styles.userNickName}>{data.userName}</Text>
          <Text style={styles.tag}></Text>
        </View>
      </View>
      <View
        style={[
          FormStyles.Row,
          { marginVertical: toSize(11), justifyContent: "space-between" },
        ]}
      >
        <View style={FormStyles.Row}>
          {[...Array(5)].map((item, index) => {
            return (
              <AntDesign
                key={index}
                name="star"
                size={toSize(15)}
                color={data.rating - 1 > index ? "#FDB600" : "#D4D6DD"}
              />
            );
          })}
        </View>
        <Text style={styles.timeText}>{dateChange(data.time)}</Text>
      </View>
      <Text style={styles.reviewText}>{data.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  userView: {
    marginLeft: toSize(11),
  },
  userNickName: {
    fontWeight: "700",
    fontSize: toSize(16),
  },
  reviewText: {
    fontWeight: "400",
    fontSize: toSize(12),
  },
  timeText: {
    fontWeight: "700",
    color: "#D4D6DD",
    fontSize: toSize(10),
  },
});
