import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { styles, textUnderlineStyle } from "./styles";
import {
  Text,
  ScrollView,
  View,
  Image,
  Linking,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MarkerCustom from "../../../components/Map/MarkerCustom";

import BackHeader from "../../../components/BackHeader";
import SpecialTipForm from "../../../components/SpecialTipForm";
import TagForm from "../../../components/PlaceForm/TagForm";
import { AntDesign, Octicons, Feather } from "@expo/vector-icons";

import { toSize } from "../../../globalStyle";
import CategoryColorForm from "../../../components/PlaceForm/CategoryColorForm";
import Review from "../../../components/Category/Review";
import { detailedInfoAPI } from "../../../api/Category";
import { addWishListAPI } from "../../../api/Explore";
const noImage = require("../../../images/noImage.png");

const DetailedScreen = ({ route }) => {
  const navigation = useNavigation();
  const { Content_ID } = route.params;
  const [Data, getData] = useState(null);
  const [ClickHeart, setHeartClick] = useState(false);
  const fixedLocation = { lat: 37.619186395690605, lng: 127.05828868985176 }; // 서울역 위치
  const [location, setLocation] = useState(fixedLocation);

  useEffect(() => {
    handleList();
    setLocation(fixedLocation);
  }, []);

  const handleList = async () => {
    detailedInfoAPI(Content_ID)
      .then((response) => {
        if (response != null) {
          getData(response[0]);
          setHeartClick(response[0].checkItem.wished);

          const fixedLocation = {
            lat: parseFloat(
              response[0].spotInfo.address.mapx
                ? response[0].spotInfo.address.mapy
                : 0
            ),
            lng: parseFloat(
              response[0].spotInfo.address.mapy
                ? response[0].spotInfo.address.mapx
                : 0
            ),
          };
          setLocation(fixedLocation);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const heartClick = () => {
    addWishListAPI(Data.spotId.id)
      .then((response) => {
        if (response != null) {
          setHeartClick(!ClickHeart);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextScreen = () => {
    const params = [
      {
        id: Data.spotId.id,
        placeName: Data.spotInfo.title,
        addr: Data.spotInfo.address.addr1.split(" ")[1],
        cat: Data.spotInfo.rekorCategory,
        img: Data.spotInfo.images[0]
          ? { url: Data.spotInfo.images[0] }
          : noImage,
        type: "",
        mapx: parseFloat(location.lng),
        mapy: parseFloat(location.lat),
      },
    ];
    navigation.navigate("MakeCourse", { params: params });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackHeader
        heartClick={heartClick}
        ClickHeart={ClickHeart}
        handleNextScreen={handleNextScreen}
      />
      {Data != null && (
        <View style={styles.MainView}>
          <View style={styles.placeInfoView}>
            <Text style={styles.Place_text}>{Data.spotInfo.title}</Text>
            <Text style={styles.Region_Text}>
              {Data.spotInfo.address.addr1.split(" ")[1]}
            </Text>

            <View style={styles.ScoreView}>
              <AntDesign
                name="heart"
                style={{ fontSize: toSize(16) }}
                color="#FF7272"
              />
              <Text style={styles.Score_Text}>{Data.spotInfo.likeCount}</Text>
              <AntDesign
                name="star"
                style={{ fontSize: toSize(16) }}
                color="#FDB600"
              />
              <Text style={styles.Score_Text}>{Data.spotInfo.rating}</Text>
            </View>

            <View style={styles.CategoryView}>
              <CategoryColorForm category={Data.spotInfo.rekorCategory} />
              <View style={styles.tagView}>
                {Data.spotInfo.tagList && (
                  <FlatList
                    numColumns={4}
                    data={Data.spotInfo.tagList}
                    keyExtractor={(item) => item.tagName.toString()}
                    renderItem={({ item, index }) => (
                      <TagForm tag={item.engTagName} key={index} />
                    )}
                  />
                )}
              </View>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            style={styles.informationView}
          >
            {Data.imageList && Data.imageList.length > 0 && (
              <View
                style={{
                  width: "100%",
                  paddingTop: toSize(30),
                }}
              >
                <ScrollView style={styles.PictureInfoView} horizontal={true}>
                  {Data.imageList.map((item, index) => {
                    return (
                      <Image
                        key={index}
                        style={styles.picture}
                        source={{ uri: item.originimgurl }}
                      />
                    );
                  })}
                </ScrollView>
              </View>
            )}

            {Data.commonInfo != null && (
              <>
                <View style={styles.infoView}>
                  <Text style={styles.TitleText}>Intro</Text>
                  {Data.commonInfo.overview != "" && (
                    <Text style={styles.IntroText}>
                      {Data.commonInfo.overview
                        .replace("<br><br>", "\n")
                        .replace("<br /><br />", "\n")
                        .replace("<br/><br/>", "\n")
                        .replace("<br>", "\n")
                        .replace("<br/>", "\n")
                        .replace("<br />", "\n")
                        .replace("&nbsp;", " ")}
                    </Text>
                  )}
                </View>

                <View style={styles.separator} />
              </>
            )}

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
                  {Data.spotInfo.address.addr1}
                </Text>
              </View>

              {Data.commonInfo != null && Data.commonInfo.tel != "" && (
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

              {Data.commonInfo != null && Data.commonInfo.homepage !== "" && (
                <View style={styles.mapInfoView}>
                  <Feather name="home" size={toSize(15)} color="#2F3036" />
                  <Text style={styles.mapInfoText}>HomePage</Text>
                  <Text
                    style={styles.subInfoText}
                    numberOfLines={2}
                    ellipsizeMode={"tail"}
                    onPress={() => Linking.openURL(Data.commonInfo.homepage)}
                  >
                    {Data.commonInfo.homepage}
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.separator} />

            {Data.detailList != null && (
              <View style={styles.infoView}>
                <View>
                  <Text style={styles.TipTitleText}>A special Tip!</Text>
                  <View style={textUnderlineStyle().container} />
                </View>
                <View style={{ flex: 1 }}>
                  {Data.detailList.map((item, index) => {
                    return (
                      <SpecialTipForm
                        key={index}
                        infoName={item.infoname}
                        infoText={item.infotext}
                      />
                    );
                  })}
                </View>
              </View>
            )}

            <View style={styles.separator} />

            <View style={styles.FinalInfoView}>
              <Text style={styles.TitleText}>Review</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("ReviewCreateScreen")}
              >
                <Octicons name="pencil" size={toSize(20)} color="black" />
              </TouchableOpacity>
            </View>

            {Data.reviewList.length > 0 &&
              Data.reviewList.map((item, index) => {
                return <Review data={item} key={index} />;
              })}

            {/* {Data.reviewList && (
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
            )} */}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default DetailedScreen;
