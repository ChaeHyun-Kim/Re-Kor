import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MarkerCustom from "../../../components/Map/MarkerCustom";
import { WithLocalSvg } from "react-native-svg";
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

import { useNavigation } from "@react-navigation/native";
const DetailedScreen = ({ route }) => {
  const navigation = useNavigation();
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
          lat: 37.619186395690605,
          lng: 127.05828868985176,
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
  const fixedLocation = {
    lat: arr[0].location_info[0].lat,
    lng: arr[0].location_info[0].lng,
  };
  const [location, setLocation] = useState(fixedLocation);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackHeader />
      <View style={styles.mainview}>
        <View style={styles.firstView}>
          <Text style={styles.Place_text}>{arr[0].place_name}</Text>
          <View style={styles.iconView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.left}
              onPress={heartClick}
            >
              <WithLocalSvg
                width={toSize(30)}
                height={toSize(30)}
                asset={ClickHeart == false ? no_heart : heart}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.left}
              onPress={() => navigation.navigate("MakeCourse")}
            >
              <WithLocalSvg
                width={toSize(30)}
                height={toSize(30)}
                asset={go_map}
              />
            </TouchableOpacity>
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
            {arr[0].tag.map((item, index) => {
              return <TagForm tag={item} key={index} />;
            })}
          </View>
        </View>
      </View>
      {/* <View style={styles.shadow}></View> */}

      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.informationView}
      >
        <View style={{ width: "90%", marginTop: toSize(30) }}>
          <ScrollView style={styles.PictureinfoView} horizontal={true}>
            <Image style={styles.picture} source={place} />
            <Image style={styles.picture} source={place} />
            <Image style={styles.picture} source={place} />
            <Image style={styles.picture} source={place} />
            <Image style={styles.picture} source={place} />
            <Image style={styles.picture} source={place} />
          </ScrollView>
        </View>
        {/* <Image
          source={{
            uri: "https://s0.2mdn.net/simgad/1842640088179983051",
          }}
        /> */}

        <View style={styles.infoView}>
          <Text style={styles.TitleText}>Intro</Text>
          <Text style={styles.IntroText}>{arr[0].intro}</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.infoView}>
          <Text style={styles.TitleText}>Location Information</Text>

          <View style={{ borderRadius: 25 }}>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
              }}
            >
              <MarkerCustom location={location} icon={"Heart"} />
            </MapView>
          </View>
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
          <Text style={styles.TipTitleText}>{"  "}A special Tip!</Text>
          {arr[0].special_tip.map((item, key) => (
            <SpecialTipForm tip={item} key={key} />
          ))}
        </View>

        <View style={styles.separator}></View>

        <View style={styles.finalinfoView}>
          <Text style={styles.TitleText}>Review</Text>
        </View>
        <View style={styles.Bottomborder}></View>
        <View style={styles.Topborder}></View>
        <View style={styles.recommendinfoView}>
          <Text style={styles.TitleText}>Recommend a similar place</Text>
          <View style={styles.recommedView}>
            <ScrollView style={styles.recommendScrollView} horizontal={true}>
              <ImageBackground
                // source={{ uri:}}
                source={place}
                style={styles.recommedImage}
                resizeMode="cover"
                imageStyle={{ borderRadius: toSize(20) }}
              >
                <Text style={styles.recommend_Place}>Gapyeong pine</Text>
                <Text style={styles.recommend_Region}>Gapyeong</Text>
              </ImageBackground>
              <ImageBackground
                // source={{ uri:}}
                source={place}
                style={styles.recommedImage}
                resizeMode="cover"
                imageStyle={{ borderRadius: toSize(20) }}
              >
                <Text style={styles.recommend_Place}>Gapyeong pine</Text>
                <Text style={styles.recommend_Region}>Gapyeong</Text>
              </ImageBackground>
              <ImageBackground
                // source={{ uri:}}
                source={place}
                style={styles.recommedImage}
                resizeMode="cover"
                imageStyle={{ borderRadius: toSize(20) }}
              >
                <Text style={styles.recommend_Place}>Gapyeong pine</Text>
                <Text style={styles.recommend_Region}>Gapyeong</Text>
              </ImageBackground>
            </ScrollView>
          </View>
        </View>
        <View style={{ marginBottom: "20%" }}></View>
      </ScrollView>
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
    width: "100%",
    height: toSize(130),
    // flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderBottomColor: "rgba(213, 213, 213, 0.2)",
    borderBottomWidth: 5,
  },
  firstView: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: toSize(6),
  },
  secondView: {
    width: "90%",
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
    width: responsiveScreenWidth(40),
    height: responsiveScreenWidth(40),
    marginRight: toSize(10),
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
  finalshadow: {
    borderRadius: 28,
    width: "100%",
    height: "20%",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0,
    shadowRadius: 10.32,

    elevation: 8,
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
  PictureinfoView: {
    // height: responsiveScreenWidth(75),
    width: "100%",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  infoView: {
    paddingVertical: toSize(17),
    width: "90%",
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
  },
  finalinfoView: {
    paddingTop: toSize(17),
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
  IntroText: { fontSize: toSize(10), fontWeight: "400", width: "95%" },

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
    width: "90%",
  },
  map: {
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(90),
  },
  recommendinfoView: {
    // paddingVertical: toSize(17),
    width: "90%",
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
  },

  recommendScrollView: {},
  recommedView: {
    flexDirection: "row",
  },
  recommedImage: {
    paddingLeft: toSize(15),
    paddingBottom: toSize(3),
    width: toSize(185),
    height: toSize(115),
    marginRight: toSize(11),
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  recommend_Place: {
    color: "#FFFFFF",
    fontSize: toSize(16),
    fontWeight: "700",
  },
  recommend_Region: {
    color: "#FFFFFF",
    fontSize: toSize(14),
    fontWeight: "400",
  },
  Bottomborder: {
    width: "100%",
    height: "3%",
    marginBottom: "10%",
    backgroundColor: "#FFFFFF",
    borderColor: "#ECECEC",
    borderBottomWidth: 2,
    borderEndWidth: 2,
    borderStartWidth: 2,
    borderBottomEndRadius: 28,
    borderBottomStartRadius: 28,
  },
  Topborder: {
    width: "100%",
    height: "3%",
    backgroundColor: "#FFFFFF",
    borderColor: "#ECECEC",
    borderTopWidth: 2,
    borderEndWidth: 2,
    borderStartWidth: 2,
    borderTopEndRadius: 28,
    borderTopStartRadius: 28,
  },
});
