import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { Text, ScrollView, View, Image, ImageBackground } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MarkerCustom from "../../../components/Map/MarkerCustom";

import BackHeader from "../../../components/BackHeader";
import SpecialTipForm from "../../../components/SpecialTipForm";
import TagForm from "../../../components/PlaceForm/TagForm";
import { AntDesign } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";

import { toSize } from "../../../globalStyle";
import CategoryColorForm from "../../../components/PlaceForm/CategoryColorForm";
import { detailedInfoAPI } from "../../../api/Category";

import { useNavigation } from "@react-navigation/native";
const DetailedScreen = ({ route }) => {
  const navigation = useNavigation();
  const { Content_ID, data } = route.params;

  useEffect(() => {
    handleList();
    setLocation(fixedLocation);
  }, []);

  const handleList = async () => {
    detailedInfoAPI(Content_ID)
      .then((response) => {
        if (response != null) {
          getData(response[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [Data, getData] = useState(null);

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
    lat: parseFloat(data.address.mapx ? data.address.mapx : 0),
    lng: parseFloat(data.address.mapy ? data.address.mapy : 0),
  };
  const [location, setLocation] = useState(fixedLocation);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackHeader heartClick={heartClick} ClickHeart={ClickHeart} />
      {Data != null && (
        <View style={styles.MainView}>
          <View style={styles.placeInfoView}>
            <Text style={styles.Place_text}>{data.title}</Text>
            <Text style={styles.Region_Text}>{data.address.addr1}</Text>

            <View style={styles.ScoreView}>
              <AntDesign
                name="heart"
                style={{ fontSize: toSize(16) }}
                color="#FF7272"
              />
              <Text style={styles.Score_Text}>{data.likeCount}</Text>
              <AntDesign
                name="star"
                style={{ fontSize: toSize(16) }}
                color="#FDB600"
              />
              <Text style={styles.Score_Text}>{data.rating}</Text>
            </View>

            <View style={styles.CategoryView}>
              <CategoryColorForm category={data.rekorCategory} />
              <View style={styles.tagView}>
                {data.tags.map((item, index) => {
                  return <TagForm tag={item.tagName} key={index} />;
                })}
              </View>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            style={styles.informationView}
          >
            {Data.imageList.length > 0 && (
              <View
                style={{
                  width: "100%",
                  paddingTop: toSize(30),
                  backgroundColor: "red",
                }}
              >
                <ScrollView style={styles.PictureInfoView} horizontal={true}>
                  <Image style={styles.picture} source={place} />
                  <Image style={styles.picture} source={place} />
                  <Image style={styles.picture} source={place} />
                  {Data.imageList.map((item, index) => {
                    <Image
                      style={styles.picture}
                      source={{ uri: item.smallimageurl }}
                    />;
                  })}
                </ScrollView>
              </View>
            )}

            <View style={styles.infoView}>
              <Text style={styles.TitleText}>Intro</Text>
              <Text style={styles.IntroText}>
                {Data.commonInfo.overview
                  .replace("<br>", "\n")
                  .replace("&nbsp;", " ")}
              </Text>
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
                  {data.address.addr1}
                </Text>
              </View>

              {Data.commonInfo.tel != "" && (
                <View style={styles.mapInfoView}>
                  <Feather name="phone" size={toSize(15)} color="#2F3036" />
                  <Text style={styles.mapInfoText}>Phone</Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode={"tail"}
                    style={styles.subInfoText}
                  >
                    {Data.commonInfo.tel}
                  </Text>
                </View>
              )}

              <View style={styles.mapInfoView}>
                <Feather name="home" size={toSize(15)} color="#2F3036" />
                <Text style={styles.mapInfoText}>HomePage</Text>
                <Text
                  style={styles.subInfoText}
                  numberOfLines={2}
                  ellipsizeMode={"tail"}
                >
                  {Data.commonInfo.homepage}
                </Text>
              </View>
            </View>

            <View style={styles.separator} />

            {Data.detailList != null && (
              <View style={styles.infoView}>
                <Text style={styles.TipTitleText}>A special Tip!</Text>
                {Data.detailList.map((item, key) => (
                  <SpecialTipForm
                    infoName={item.infoName}
                    infoText={item.infoText}
                    key={key}
                  />
                ))}
              </View>
            )}

            <View style={styles.separator} />

            <View style={styles.FinalInfoView}>
              <Text style={styles.TitleText}>Review</Text>
            </View>
            <View style={styles.Bottomborder} />
            <View style={styles.Topborder} />

            {Data.reviewList && (
              <View style={styles.recommendInfoView}>
                <Text style={styles.TitleText}>Recommend a similar place</Text>
                <View style={styles.recommendView}>
                  <ScrollView
                    style={styles.recommendScrollView}
                    horizontal={true}
                  >
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
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default DetailedScreen;
