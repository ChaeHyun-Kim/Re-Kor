import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../../components/MyHeader";
import { WithLocalSvg } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import SettingView from "../../../components/Explore/SettingView.jsx";
import { useNavigation } from "@react-navigation/native";
import { getUserTagList } from "../../../api/Explore";
import { wishListAPI } from "../../../api/WishList";

import cat_shoppingLover from "../../../icons/cat_shoppingLover.svg";
import cat_foodFighting from "../../../icons/cat_foodFighting.svg";
import cat_hanbokyi from "../../../icons/cat_hanbokyi.svg";
import cat_suffer from "../../../icons/cat_suffer.svg";
import cat_viewer from "../../../icons/cat_viewer.svg";
import TagForm from "../../../components/PlaceForm/TagForm";
import CenterModal from "../../../components/Modal/CenterModal";

const MyPageScreen = () => {
  const navigation = useNavigation();
  const [userName, getUserName] = useState("");
  const [catNum, getCatNum] = useState("");
  const [data, getData] = useState([]);
  const [wishData, getWishData] = useState([]);
  const [update, setUpdate] = useState(false);

  const HomeLine = require("../../../icons/ic_homeLine.png");
  const noImage = require("../../../images/noImageTitle.png");

  const getUserData = async () => {
    const userNickName = await AsyncStorage.getItem("userNickName");
    const catNumber = await AsyncStorage.getItem("catNumber");
    getCatNum(parseInt(catNumber));
    getUserName(JSON.parse(userNickName));
  };
  getUserData();

  /*추천 관광지 API 불러오기 */
  const handleTagList = async () => {
    getUserTagList()
      .then((response) => {
        if (response != null) {
          getData(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWishList = async () => {
    wishListAPI()
      .then((response) => {
        if (response != null) {
          getWishData(response);
          console.log(response[0].spotId.id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleTagList();
    handleWishList();
  }, []);

  return (
    <View style={styles.fullscreen}>
      <CenterModal
        visible={update}
        title={"Coming soon"}
        rightPress={() => setUpdate(false)}
        rightText={"Close"}
      >
        <Text color={"#000"} lineHeight={15}>
          {"please wait for a moment"}
        </Text>
      </CenterModal>
      <StatusBar style="auto" />
      <Header Title={"My Page"} />
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <View style={styles.picture}>
            <WithLocalSvg
              height={toSize(100)}
              width={toSize(100)}
              asset={
                catNum === 0
                  ? cat_shoppingLover
                  : catNum === 1
                  ? cat_foodFighting
                  : catNum === 2
                  ? cat_hanbokyi
                  : catNum === 3
                  ? cat_suffer
                  : cat_viewer
              }
            />
          </View>

          <Image source={HomeLine} style={styles.lineBackView} />
          <View style={styles.userView}>
            <View style={styles.iconView}>
              <AntDesign name="setting" size={toSize(20)} color="black" />
            </View>
            <Text style={styles.Nickname}>{userName}</Text>
            <View style={styles.tagView}>
              {data &&
                data.map((item, index) => {
                  return <TagForm tag={item.tagName} key={index} />;
                })}
            </View>
            {wishData && (
              <>
                <Text style={styles.WishTitle}>Wishlist</Text>
                <View style={styles.wishView}>
                  {wishData.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() =>
                          navigation.navigate("DetailedScreen", {
                            Content_ID: item.spotId.id,
                          })
                        }
                      >
                        <Image
                          source={
                            item.images[0] === ""
                              ? noImage
                              : { uri: item.images[0] }
                          }
                          style={styles.imageStyle}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </>
            )}
          </View>
        </View>

        <View style={styles.lineView} />
        <View style={styles.settingView}>
          <SettingView
            icon={"setting"}
            content={"Recommended tourist destination"}
            handleFunction={setUpdate}
          />
          <SettingView
            icon={"arrowright"}
            content={"Re-Kor Instructions"}
            handleFunction={setUpdate}
          />
        </View>
      </View>
    </View>
  );
};
export default MyPageScreen;

const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  userInfo: {
    marginTop: toSize(11),
    height: toSize(321),
    justifyContent: "flex-end",
    width: toSize(327),
    position: "relative",
    marginBottom: toSize(20),
  },
  userView: {
    height: toSize(281),
    borderRadius: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    padding: toSize(18),
  },
  picture: {
    position: "absolute",
    resizeMode: "cover",
    top: 0,
    left: toSize(327) / 2 - toSize(100) / 2,
    width: toSize(100),
    height: toSize(100),
    borderRadius: 50,
    zIndex: 100,
    backgroundColor: "white",
  },
  Nickname: {
    marginTop: toSize(25),
    fontWeight: "700",
    fontSize: toSize(15),
    color: "#2F3036",
    textAlign: "center",
  },
  iconView: {
    width: "100%",
    alignItems: "flex-end",
  },
  settingView: {
    width: "100%",
  },
  lineView: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    height: toSize(30),
  },
  tagView: {
    flexDirection: "row",
    marginVertical: toSize(20),
  },
  wishView: {
    flexDirection: "row",
    marginTop: toSize(6),
    marginBottom: toSize(11),
  },
  lineBackView: {
    position: "absolute",
    left: "50%",
    marginLeft: -responsiveScreenWidth(55),
    width: responsiveScreenWidth(110),
    zIndex: -100,
    bottom: toSize(200),
  },
  WishTitle: {
    fontWeight: "700",
    fontSize: toSize(14),
    color: "#5F5F5F",
  },
  imageStyle: {
    height: toSize(75),
    width: toSize(75),
    borderRadius: 10,
    marginRight: toSize(10),
  },
});
