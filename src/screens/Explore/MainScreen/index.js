import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

import user_character from "../../../icons/user_character.svg";
import no_heart from "../../../icons/icon_NoHeart.svg";
import heart from "../../../icons/icon_Heart.svg";
import upArrow from "../../../icons/uparrow.svg";
import downArrow from "../../../icons/downarrow.svg";
import { toSize } from "../../../globalStyle";

const ExploreMainScreen = () => {
  const [userData, setUserData] = useState([
    {
      user_name: "Gayoung",
      region: "Gapyeong",
      place_name: "Petite France",
      keyword: ["Fun", "K-Drama", "Fun", "Fun", "Fun"],
      place_heart: 100,
      place_star: 4.5,
    },
  ]);

  const place = require("../../../images/place1.png");
  const [ClickHeart, setHeartClick] = useState(false);

  const heartClick = () => {
    setHeartClick(ClickHeart == false ? true : false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.MainView}>
        <View style={styles.user_information}>
          <View style={styles.row_view}>
            <View style={styles.line}>
              <Text style={styles.welcome_text}>
                Hi, {userData[0].user_name}
              </Text>
              <Text style={styles.welcome_text}>
                I'll recommend it to you again!
              </Text>
            </View>
            <WithLocalSvg
              style={{ fontSize: toSize(60) }}
              asset={user_character}
            />
          </View>
          <View style={styles.row_view_unit}>
            <View style={styles.column_view}>
              <Text style={styles.unit}>USD</Text>
              <Text style={styles.unit_view}>1 $</Text>
            </View>
            <View style={styles.column_view}>
              <Text style={styles.unit}></Text>
              <Text style={styles.equal}>=</Text>
            </View>
            <View style={styles.column_view}>
              <Text style={styles.unit}>KRW</Text>
              <Text style={styles.unit_view}>1,301.00 won</Text>
            </View>
          </View>
        </View>

        <View style={styles.recommend_view}>
          <Text style={styles.recommend_title}>Today's recommended place</Text>
          <View style={styles.place_view}>
            <WithLocalSvg style={{ fontSize: toSize(32) }} asset={upArrow} />
            <ImageBackground
              style={styles.picture}
              source={place}
              resizeMode="cover"
              imageStyle={{ borderRadius: toSize(20) }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.left}
                onPress={heartClick}
              >
                <WithLocalSvg
                  style={{ fontSize: toSize(34) }}
                  asset={ClickHeart == false ? no_heart : heart}
                />
              </TouchableOpacity>

              <View style={styles.place_information}>
                <Text style={styles.region_text}>{userData[0].region}</Text>
                <View style={styles.row_view}>
                  <View style={styles.leftview}>
                    <Text style={styles.place_text}>
                      {userData[0].place_name}
                    </Text>
                    <View style={styles.row}>
                      <AntDesign
                        name="heart"
                        style={{ fontSize: toSize(12) }}
                        color="#FF7272"
                      />
                      <Text style={styles.sub_text}>
                        {userData[0].place_heart}
                      </Text>
                      <AntDesign
                        name="star"
                        style={{ fontSize: toSize(13) }}
                        color="#FDB600"
                      />
                      <Text style={styles.sub_text}>
                        {userData[0].place_star}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.right_view}>
                    <Text style={styles.region_text}>
                      {userData[0].place_star}
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <WithLocalSvg style={{ fontSize: toSize(32) }} asset={downArrow} />
          </View>
        </View>
      </View>
      <Bottom num={1} />
    </View>
  );
};

export default ExploreMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  user_information: {
    width: responsiveScreenWidth(90),
    height: toSize(131),
    marginTop: toSize(10),
    borderRadius: toSize(20),
    paddingHorizontal: toSize(24),
    paddingVertical: toSize(10),
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  row_view: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  row_view_unit: {
    flexDirection: "row",
    margin: toSize(5),
  },
  welcome_text: {
    fontSize: toSize(16),
    fontWeight: "300",
    lineHeight: toSize(25),
  },
  line: {
    borderBottomWidth: toSize(1),
    borderColor: "#EDEDED",
    paddingBottom: toSize(5),
  },
  unit_view: {
    fontSize: toSize(15),
    paddingHorizontal: toSize(11),
    paddingVertical: toSize(4),
    borderColor: "#D0D0D0",
    borderWidth: toSize(1),
    borderRadius: toSize(20),
    fontWeight: "400",
    color: "black",
  },
  unit: {
    fontWeight: "700",
    fontSize: toSize(10),
    color: "black",
  },
  column_view: {
    alignItems: "center",
    justifyContent: "center",
  },
  equal: {
    marginHorizontal: toSize(10),
  },
  recommend_view: {
    width: responsiveScreenWidth(90),
    marginTop: toSize(20),
  },
  recommend_title: {
    fontWeight: "800",
    fontSize: toSize(18),
    color: "black",
  },
  place_view: {
    marginTop: toSize(10),
    alignItems: "center",
  },
  picture: {
    width: toSize(328),
    height: toSize(290),
    borderRadius: toSize(20),
    position: "relative",
    paddingTop: 20,
    justifyContent: "space-between",
    marginVertical: toSize(9),
  },
  region_text: {
    fontWeight: "400",
    fontSize: toSize(14),
    color: "white",
  },
  place_text: {
    fontWeight: "700",
    fontSize: toSize(25),
    color: "white",
  },
  sub_text: {
    fontWeight: "700",
    fontSize: toSize(10),
    color: "white",
    marginLeft: toSize(5),
    marginRight: toSize(8),
  },
  left: {
    alignItems: "flex-end",
    paddingRight: toSize(20),
  },
  place_information: {
    width: "100%",
    padding: toSize(20),
  },
  row: {
    flexDirection: "row",
  },
});
