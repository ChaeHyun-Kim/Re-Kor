import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

import no_heart from "../../../icons/icon_NoHeart.svg";
import heart from "../../../icons/icon_Heart.svg";
import upArrow from "../../../icons/uparrow.svg";
import downArrow from "../../../icons/downarrow.svg";
import { toSize } from "../../../globalStyle";
import UserInfo from "../../../components/Explore/UserInfo";

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
  const [HeartShow, setHeartShow] = useState(false);

  const heartClick = () => {
    setHeartClick(ClickHeart == false ? true : false);
  };

  useEffect(() => {
    if (ClickHeart) {
      setHeartShow(true);
      setTimeout(function () {
        setHeartShow(false);
      }, 1000);
    }
  }, [ClickHeart]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.MainView}>
        <UserInfo userData={userData} />

        <View style={styles.recommend_view}>
          <Text style={styles.recommend_title}>Today's recommended place</Text>
          <View style={styles.place_view}>
            <WithLocalSvg
              width={toSize(36)}
              height={toSize(10)}
              asset={upArrow}
            />
            <ImageBackground
              style={styles.picture}
              source={place}
              resizeMode="cover"
              imageStyle={{ borderRadius: toSize(20) }}
            >
              {HeartShow && (
                <View style={styles.HeartShow}>
                  <AntDesign
                    name="heart"
                    style={{ fontSize: toSize(95) }}
                    color="#FF7272"
                  />
                </View>
              )}
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.left}
                onPress={heartClick}
              >
                <WithLocalSvg
                  width={toSize(34)}
                  height={toSize(34)}
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
            <WithLocalSvg
              width={toSize(36)}
              height={toSize(10)}
              asset={downArrow}
            />
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
    backgroundColor: "#fff",
  },
  row_view: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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
  HeartShow: {
    position: "absolute",
    top: (toSize(290) - toSize(95)) / 2,
    left: (toSize(328) - toSize(95)) / 2,
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
