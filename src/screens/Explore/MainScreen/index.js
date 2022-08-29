import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

import no_heart from "../../../icons/icon_NoHeart.svg";
import heart from "../../../icons/icon_Heart.svg";
import { toSize } from "../../../globalStyle";
import UserInfo from "../../../components/Explore/UserInfo";
import CategoryColorForm from "../../../components/PlaceForm/CategoryColorForm";
import TagForm from "../../../components/PlaceForm/TagForm";

import { Ionicons } from "@expo/vector-icons";

const ExploreMainScreen = () => {
  const [userName, getUserName] = useState("");
  const placeArray = [
    {
      place_name: "Petite France",
      region: "Gapyeong",
      keyword: ["Fun", "K-Drama", "Fun", "Fun", "Fun"],
      place_heart: 100,
      place_star: 4.5,
      category: "K-DRAMA",
      tags: [
        // { tag_name: "#Fun3", tag_category: "A" },
        // { tag_name: "#Theme Parks", tag_category: "C" },
        // { tag_name: "#Fun", tag_category: "B" },
      ],
      picture: require("../../../images/place2.png"),
      heart: true,
    },
  ];
  const arrayNum = placeArray.length;
  const [placeNumber, setPlaceNumber] = useState(0);
  const [ClickHeart, setHeartClick] = useState(placeArray[placeNumber]);
  const [HeartShow, setHeartShow] = useState(false);

  const getUserData = async () => {
    const userNickName = await AsyncStorage.getItem("userNickName");
    getUserName(JSON.parse(userNickName));
  };
  getUserData();

  const HomeBack = require("../../../icons/ic_homeBack.png");

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

  var lastTap = null;
  const HandleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      heartClick();
    } else {
      lastTap = now;
    }
  };

  const placeUp = () => {
    setPlaceNumber(placeNumber != 0 ? placeNumber - 1 : placeNumber);
  };

  const placeDown = () => {
    setPlaceNumber(placeNumber != arrayNum ? placeNumber + 1 : placeNumber);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.MainView}>
        <UserInfo userNickName={userName} />
        <View style={styles.recommend_view}>
          <Text style={styles.recommend_title}>Today's recommended place</Text>
          <View style={styles.place_view}>
            <TouchableOpacity activeOpacity={0.8} onPress={placeUp}>
              <Ionicons
                name="md-chevron-up"
                size={toSize(30)}
                color={placeNumber != 0 ? "#D3D3D3" : "#fff"}
              />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={HandleDoubleTap}>
              <ImageBackground
                style={styles.picture}
                source={placeArray[placeNumber].picture}
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

                <Image source={HomeBack} style={styles.backView} />
                <View style={styles.fullView}>
                  <View style={styles.place_information}>
                    <Text style={styles.region_text}>
                      {placeArray[placeNumber].region}
                    </Text>

                    <Text style={styles.place_text}>
                      {placeArray[placeNumber].place_name}
                    </Text>

                    <View style={styles.row}>
                      <CategoryColorForm
                        category={placeArray[placeNumber].category}
                      />
                      <View style={styles.line} />
                      <AntDesign
                        name="heart"
                        style={{ fontSize: toSize(12) }}
                        color="#FF7272"
                      />
                      <Text style={styles.sub_text}>
                        {placeArray[placeNumber].place_heart}
                      </Text>
                      <AntDesign
                        name="star"
                        style={{ fontSize: toSize(13) }}
                        color="#FDB600"
                      />
                      <Text style={styles.sub_text}>
                        {placeArray[placeNumber].place_star}
                      </Text>
                    </View>
                    <View style={styles.tagView}>
                      {placeArray[placeNumber].tags.map((item, index) => {
                        return <TagForm tag={item} key={index} />;
                      })}
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableWithoutFeedback>
            <TouchableOpacity activeOpacity={0.8} onPress={placeDown}>
              <Ionicons
                name="md-chevron-down"
                size={toSize(30)}
                color={placeNumber != arrayNum - 1 ? "#D3D3D3" : "#fff"}
              />
            </TouchableOpacity>
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
    width: responsiveScreenWidth(100),
  },
  MainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    width: responsiveScreenWidth(100),
  },
  row_view: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  recommend_view: {
    width: "100%",
    paddingHorizontal: toSize(24),
    marginTop: toSize(15),
  },
  recommend_title: {
    fontWeight: "700",
    fontSize: toSize(20),
    color: "#2F3036",
  },
  place_view: {
    marginTop: toSize(3),
    alignItems: "center",
  },
  fullView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: toSize(20),
    paddingVertical: toSize(30),
  },
  backView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  picture: {
    width: toSize(328),
    height: toSize(328),
    borderRadius: toSize(20),
    position: "relative",
    paddingTop: toSize(14),
    justifyContent: "space-between",
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
    fontSize: toSize(20),
    color: "white",
    paddingBottom: toSize(7),
  },
  sub_text: {
    fontWeight: "700",
    fontSize: toSize(12),
    color: "white",
    marginLeft: toSize(5),
    marginRight: toSize(6),
  },
  left: {
    alignItems: "flex-end",
    paddingRight: toSize(20),
  },
  place_information: {
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  tagView: {
    flexDirection: "row",
    marginTop: toSize(7),
  },
  line: {
    width: toSize(1),
    height: toSize(13),
    backgroundColor: "#fff",
    marginHorizontal: toSize(8),
  },
});
