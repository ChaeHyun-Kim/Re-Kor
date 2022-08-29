import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Text, ScrollView, View, Image, ImageBackground } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MarkerCustom from "../../../components/Map/MarkerCustom";
import { WithLocalSvg } from "react-native-svg";

import BackHeader from "../../../components/BackHeader";
import SpecialTipForm from "../../../components/SpecialTipForm";
import TagForm from "../../../components/PlaceForm/TagForm";
import { AntDesign } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

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
      <BackHeader heartClick={heartClick} ClickHeart={ClickHeart} />
      <View style={styles.MainView}>
        <View style={styles.placeInfoView}>
          <Text style={styles.Place_text}>{arr[0].place_name}</Text>
          <Text style={styles.Region_Text}>{arr[0].region}</Text>

          <View style={styles.ScoreView}>
            <AntDesign
              name="heart"
              style={{ fontSize: toSize(16) }}
              color="#FF7272"
            />
            <Text style={styles.Score_Text}>{arr[0].heartscore}</Text>
            <AntDesign
              name="star"
              style={{ fontSize: toSize(16) }}
              color="#FDB600"
            />
            <Text style={styles.Score_Text}>{arr[0].starscore}</Text>
          </View>

          <View style={styles.CategoryView}>
            <CategoryColorForm category={arr[0].category} />
            <View style={styles.tagView}>
              {arr[0].tag.map((item, index) => {
                return <TagForm tag={item} key={index} />;
              })}
            </View>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          style={styles.informationView}
        >
          <View style={{ width: "100%", marginTop: toSize(30) }}>
            <ScrollView style={styles.PictureInfoView} horizontal={true}>
              <Image style={styles.picture} source={place} />
              <Image style={styles.picture} source={place} />
              <Image style={styles.picture} source={place} />
              <Image style={styles.picture} source={place} />
              <Image style={styles.picture} source={place} />
              <Image style={styles.picture} source={place} />
            </ScrollView>
          </View>

          <View style={styles.infoView}>
            <Text style={styles.TitleText}>Intro</Text>
            <Text style={styles.IntroText}>{arr[0].intro}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoView}>
            <Text style={styles.TitleText}>Location Information</Text>
            <View style={styles.placeMap}>
              <View style={styles.mapRadius}>
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
            </View>

            <View style={styles.mapInfoView}>
              <Feather name="map-pin" size={toSize(15)} color="#2F3036" />
              <Text style={styles.mapInfoText}>Address</Text>
              <Text
                style={styles.subInfoText}
                numberOfLines={2}
                ellipsizeMode={"tail"}
              >
                {arr[0].location_info[0].adress}
              </Text>
            </View>

            <View style={styles.mapInfoView}>
              <Feather name="phone" size={toSize(15)} color="#2F3036" />
              <Text style={styles.mapInfoText}>Phone</Text>
              <Text
                numberOfLines={2}
                ellipsizeMode={"tail"}
                style={styles.subInfoText}
              >
                {arr[0].location_info[0].phone}
              </Text>
            </View>

            <View style={styles.mapInfoView}>
              <Feather name="home" size={toSize(15)} color="#2F3036" />
              <Text style={styles.mapInfoText}>HomdPage</Text>
              <Text
                style={styles.subInfoText}
                numberOfLines={2}
                ellipsizeMode={"tail"}
              >
                {arr[0].location_info[0].homepage}
              </Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoView}>
            <Text style={styles.TipTitleText}>A special Tip!</Text>
            {arr[0].special_tip.map((item, key) => (
              <SpecialTipForm tip={item} key={key} />
            ))}
          </View>

          <View style={styles.separator} />

          {/* <View style={styles.FinalInfoView}>
            <Text style={styles.TitleText}>Review</Text>
          </View>
          <View style={styles.Bottomborder} />
          <View style={styles.Topborder} /> */}

          <View style={styles.recommendInfoView}>
            <Text style={styles.TitleText}>Recommend a similar place</Text>
            <View style={styles.recommendView}>
              <ScrollView style={styles.recommendScrollView} horizontal={true}>
                <ImageBackground
                  source={place}
                  style={styles.recommendImage}
                  resizeMode="cover"
                  imageStyle={{ borderRadius: toSize(10) }}
                >
                  <Text style={styles.recommend_Place}>Gapyeong pine</Text>
                  <Text style={styles.recommend_Region}>Gapyeong</Text>
                </ImageBackground>
                <ImageBackground
                  source={place}
                  style={styles.recommendImage}
                  resizeMode="cover"
                  imageStyle={{ borderRadius: toSize(10) }}
                >
                  <Text style={styles.recommend_Place}>Gapyeong pine</Text>
                  <Text style={styles.recommend_Region}>Gapyeong</Text>
                </ImageBackground>
                <ImageBackground
                  source={place}
                  style={styles.recommendImage}
                  resizeMode="cover"
                  imageStyle={{ borderRadius: toSize(10) }}
                >
                  <Text style={styles.recommend_Place}>Gapyeong pine</Text>
                  <Text style={styles.recommend_Region}>Gapyeong</Text>
                </ImageBackground>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailedScreen;
