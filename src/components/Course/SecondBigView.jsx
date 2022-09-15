import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle";
import { Feather } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";
import full_course_icon from "../../icons/full_course_icon.svg";
import PlaceList from "../Map/PlaceList";
import SimplePopupMenu from "react-native-simple-popup-menu";

const SecondBigView = ({ course_info }) => {
  const data = course_info.spotList;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.rowView_space}>
        <View style={styles.rowView_start}>
          <View style={styles.rowView}>
            <Feather name="map-pin" size={toSize(17)} color="black" />
            <View style={styles.rowView_place}>
              <Text style={styles.boldText}>
                {course_info.spotList.length}{" "}
              </Text>
              <Text style={styles.normalText}>places</Text>
            </View>
          </View>
          {/* <View style={styles.border}></View>
          <View style={styles.rowView}>
            <Text style={styles.boldText2}>Total </Text>
            <Text style={styles.normalText}>10km</Text>
          </View> */}
        </View>
        {/* <WithLocalSvg
          asset={full_course_icon}
          width={toSize(30)}
          height={toSize(30)}
        /> */}
      </View>
      {data.map((item, index) => {
        // const type = item.isRecommend ? "recommend" : item.isWished ? "wish" : ""
        // const addr_v = item.address.addr1.split(" ")[1],
        return (
          <PlaceList
            key={index}
            // place_name={item.title}
            // region={item.address.addr1.split(" ")[1]}
            // category={item.rekorCategory}
            // tag={item.tagList.tagName}
            num={index + 1}
            screentype={"course_list"}
            params={{
              addr: item.address.addr1.split(" ")[1],
              cat: item.rekorCategory,
              placeName: item.title,
              img: item.images[0] == "" ? undefined : { uri: item.images[0] },
              type: item.isRecommend
                ? "recommend"
                : item.isWished
                ? "wish"
                : "",
            }}
            // km={5}
          ></PlaceList>
        );
      })}
    </View>
  );
};
export default SecondBigView;
const styles = StyleSheet.create({
  ListView: {
    backgroundColor: "#FFFFFF",
    borderRadius: toSize(15),
    paddingHorizontal: toSize(16),
    paddingVertical: toSize(16),
    marginLeft: toSize(8),
    marginTop: toSize(11),
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  courseNameView: {
    flexDirection: "row",
    marginBottom: toSize(20),
    alignItems: "center",
  },
  mainText: {
    fontSize: toSize(14),
    color: "#2F3036",
    fontWeight: "700",
    marginLeft: toSize(18),
    flex: 1,
  },
  picture: {
    width: toSize(65),
    height: toSize(65),
    marginRight: toSize(10),
    borderRadius: 7,
  },
  border: {
    height: toSize(12),
    borderColor: "#D4D6DD",
    borderWidth: toSize(1),
    marginHorizontal: toSize(4),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rowView_place: {
    marginLeft: toSize(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rowView_space: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: toSize(14),
  },
  rowView_start: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boldText: {
    fontSize: toSize(12),
    fontWeight: "700",
  },
  boldText2: {
    fontSize: toSize(12),
    fontWeight: "700",
    marginRight: toSize(13),
  },
  normalText: {
    fontSize: toSize(12),
    fontWeight: "400",
  },
});
