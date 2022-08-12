import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, FlatList, View, Image } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import AutoScrollView from "react-native-auto-scroll-view";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import BackHeader from "../../../components/BackHeader";
import SpecialTipForm from "../../../components/SpecialTipForm";
import TagForm from "../../../components/PlaceForm/TagForm";
import { AntDesign } from "@expo/vector-icons";

import no_heart from "../../../icons/icon_NoHeart.svg";
import heart from "../../../icons/icon_Heart.svg";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import go_map from "../../../icons/go_map.svg";
import { toSize } from "../../../globalStyle";
import CategoryColorForm from "../../../components/PlaceForm/CategoryColorForm";

const DetailedScreen = ({ route, navigation }) => {
  const { Content_ID } = route.params;
  // Content_ID로 데이터 받아옴
  const arr = [
    {
      place_name: "Gapyeong Rail Park1",
      region: "Gapyeong",
      user_heart: 0,
      heartscore: 1,
      starscore: 4.5,
      category: "K-POP",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
      image: ["../../../../src/images/place1.png"],
      intro:
        'Gapyeong Rail Bike is a round-trip course from Gapyeong Station to Bukhangang River Railway Bridge, Zelkova Tunnel, which varies depending on the season, and Gyeonggang Station, the filming location of the movie "Letter", and return to Gapyeong Station. As you step on the abandoned moon along the 30-meter-high Bukhangang River railroad bridge across the Bukhangang River, you can see a quiet rural village and a beautiful blue riverside alternately in front of you.',
      location_info: [
        {
          adress: "14 Jangteo-gil, Gapyeong-eup, Gapyeong-gun, Gyeonggi-do",
          phone: "031-582-7768",
          homepage: "https://www.railpark.co.kr/rail/rail3_01",
        },
      ],
      special_tip: [
        "Course Guide\nGapyeong Station --> Bukhan Steel Bridge --> Zelkova Tunnel --> Gyeonggang Station\nGyeonggang Station --> Zelkova Tunnel --> Bukhangang Railway Bridge --> Gapyeong Station",
        "Second Tip",
        "Third Tip",
        "Fourth Tip",
      ],

      // special_tip: ["First Tip", "Second Tip", "Third Tip", "Fourth Tip"],
      review: [
        {
          reviewer: "닉네임",
          review_tag: [
            { tag_name: "#so fun", tag_category: "A" },
            { tag_name: "#soso fun", tag_category: "C" },
          ],
          review_image: [],
          review_text: "리뷰 글",
        },
      ],
    },
  ];

  // const [heartState, setHeartState] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackHeader />
      <View style={styles.mainview}>
        <View style={styles.firstView}>
          <Text style={styles.Place_text}>{arr[0].place_name}</Text>
          <View style={styles.iconView}>
            <WithLocalSvg
              width={toSize(30)}
              height={toSize(30)}
              asset={no_heart}
            ></WithLocalSvg>
            <WithLocalSvg
              width={toSize(30)}
              height={toSize(30)}
              asset={go_map}
            ></WithLocalSvg>
          </View>
        </View>
        <View style={styles.secondView}>
          <View style={styles.region_score_View}>
            <Text style={styles.Region_Text}>{arr[0].region}</Text>
            <View style={styles.ScoreView}>
              <AntDesign
                name="heart"
                style={{ fontSize: toSize(12) }}
                color="#FF7272"
              />
              <Text style={styles.Score_Text}>{arr[0].heartscore}</Text>
              <AntDesign
                name="star"
                style={{ fontSize: toSize(13) }}
                color="#FDB600"
              />
              <Text style={styles.Score_Text}>{arr[0].starscore}</Text>
            </View>
          </View>
          <View style={styles.CategoryView}>
            <CategoryColorForm category={arr[0].category}></CategoryColorForm>
          </View>

          <View style={styles.tagView}>
            <FlatList
              horizontal={true}
              keyExtractor={(item) => item.toString()}
              data={arr[0].tag}
              renderItem={({ item }) => <TagForm tag={item}></TagForm>}
            ></FlatList>
          </View>
        </View>
      </View>
      <View style={styles.shadow}></View>
      <AutoScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.informationView}
      >
        {/* <Image style={styles.picture} source={place} /> */}
        <View style={styles.infoView}>
          <Text style={styles.TitleText}>Intro</Text>
          <Text style={styles.IntroText}>{arr[0].intro}</Text>
        </View>
        <View style={styles.separator}></View>

        <View style={styles.infoView}>
          <Text style={styles.TitleText}>Location Information</Text>
          <View style={styles.mapInfoView}>
            <Feather name="map-pin" size={15} color="black" />
            <View style={styles.mapTitleView}>
              <Text style={styles.mapInfoText}>Adress</Text>
            </View>
            <Text style={styles.loca_Text}>
              {arr[0].location_info[0].adress}
            </Text>
          </View>
          <View style={styles.mapInfoView}>
            <Feather name="phone" size={15} color="black" />

            <View style={styles.mapTitleView}>
              <Text style={styles.mapInfoText}>Phone</Text>
            </View>
            <Text style={styles.loca_Text}>
              {arr[0].location_info[0].phone}
            </Text>
          </View>
          <View style={styles.mapInfoView}>
            <Feather name="home" size={15} color="black" />
            <View style={styles.mapTitleView}>
              <Text style={styles.mapInfoText}>HomdPage</Text>
            </View>
            <Text style={styles.loca_Text}>
              {arr[0].location_info[0].homepage}
            </Text>
          </View>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.infoView}>
          <Text style={styles.TipTitleText}>{"  "}A specail Tip!</Text>
          <FlatList
            keyExtractor={(item) => item.toString()}
            data={arr[0].special_tip}
            renderItem={({ item, key }) => (
              <SpecialTipForm tip={item} key={key} />
            )}
          />
        </View>
        <View style={styles.separator}>
          <Text>123</Text>
        </View>
      </AutoScrollView>
    </View>
  );
};

export default DetailedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  mainview: {
    width: "90%",
    height: toSize(130),
    // flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  firstView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: toSize(6),
  },
  secondView: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  region_score_View: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: toSize(6),
    justifyContent: "space-between",
  },
  iconView: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  picture: {
    width: toSize(96),
    height: toSize(96),
    borderRadius: 17,
  },
  shadow: {
    width: "100%",
    height: toSize(2),
    marginBottom: toSize(2),
    backgroundColor: "#FAFAFA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.32,

    elevation: 10,
  },
  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
    width: "90%",
  },
  informationView: {
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  TipTitleText: {
    width: toSize(125),
    fontSize: toSize(18),
    fontWeight: "800",
    marginBottom: toSize(11),
    backgroundColor: "#FDB600",
  },
  TitleText: {
    fontSize: toSize(18),
    fontWeight: "800",
    marginBottom: toSize(11),
  },
  infoView: {
    paddingVertical: toSize(17),
    width: "90%",
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
  },
  mapInfoView: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: toSize(3),
  },
  mapInfoText: {
    fontSize: toSize(10),
    fontWeight: "700",
  },
  mapTitleView: {
    flexDirection: "row",
    alignItems: "center",
    width: toSize(60),
    justifyContent: "center",
  },
  loca_Text: { fontSize: toSize(8), fontWeight: "400", color: "#929292" },
  IntroText: { fontSize: toSize(10), fontWeight: "400", width: "90%" },

  Place_text: {
    paddingTop: 4,
    fontSize: toSize(18),
    fontWeight: "800",
    color: "#1F2024",
  },
  Region_Text: {
    color: "#71727A",
    fontWeight: "400",
  },
  Score_Text: {
    marginLeft: 5,
    marginRight: 10,
  },
  ScoreView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tagView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: toSize(20),
  },
  CategoryView: {
    paddingBottom: toSize(6),
  },
});
