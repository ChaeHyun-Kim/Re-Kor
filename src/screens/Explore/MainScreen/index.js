import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { WithLocalSvg } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { toSize } from '../../../globalStyle';
import { recommendTourAPI, addWishListAPI } from '../../../api/Explore';

import Header from '../../../components/Header';
import Bottom from '../../../components/Bottom';
import UserInfo from '../../../components/Explore/UserInfo';
import CategoryColorForm from '../../../components/PlaceForm/CategoryColorForm';
import TagForm from '../../../components/PlaceForm/TagForm';

import no_heart from '../../../icons/icon_NoHeart.svg';
import heart from '../../../icons/icon_Heart.svg';

const ExploreMainScreen = () => {
  const [userName, getUserName] = useState('');
  const [catNum, getCatNum] = useState('');
  const [placeArray, handlePlaceArray] = useState([]);
  const [ClickHeart, setHeartClick] = useState(false);
  const [placeNumber, setPlaceNumber] = useState(0);
  const [HeartShow, setHeartShow] = useState(false);
  const [heartAdd, setHeartAdd] = useState(0);

  const arrayNum = placeArray.length;
  const HomeBack = require('../../../icons/ic_homeBack.png');
  const noImage = require('../../../images/noImageTitle.png');

  /*추천 관광지 API 불러오기 */
  const handleList = async () => {
    recommendTourAPI()
      .then((response) => {
        if (response != null) {
          handlePlaceArray(response);
          setHeartClick(
            placeArray[placeNumber]?.isInWishList
              ? placeArray[placeNumber].isInWishList
              : false,
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*유저 닉네임 */
  const getUserData = async () => {
    const userNickName = await AsyncStorage.getItem('userNickName');
    const catNumber = await AsyncStorage.getItem('catNumber');
    getCatNum(catNumber);
    getUserName(JSON.parse(userNickName));
  };
  getUserData();

  useEffect(() => {
    handleList();
  }, []);

  useEffect(() => {
    setHeartClick(
      placeArray[placeNumber]?.isInWishList
        ? placeArray[placeNumber].isInWishList
        : false,
    );
  }, [placeNumber]);

  const heartClick = () => {
    addWishListAPI(placeArray[placeNumber].spotId.id)
      .then((response) => {
        if (response != null) {
          setHeartClick(!ClickHeart);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (ClickHeart) {
      setHeartShow(true);
      setHeartAdd(1);
      setTimeout(function () {
        setHeartShow(false);
      }, 1000);
    } else {
      setHeartAdd(0);
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
        <UserInfo userNickName={userName} catNum={parseInt(catNum)} />
        <View style={styles.recommend_view}>
          <Text style={styles.recommend_title}>Today's recommended place</Text>
          <View style={styles.place_view}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={placeNumber != 0 ? placeUp : null}
            >
              <Ionicons
                name="md-chevron-up"
                size={toSize(30)}
                color={placeNumber != 0 ? '#D3D3D3' : '#fff'}
              />
            </TouchableOpacity>

            <TouchableWithoutFeedback onPress={HandleDoubleTap}>
              <ImageBackground
                style={styles.picture}
                source={
                  placeArray.length == 0
                    ? noImage
                    : placeArray[placeNumber].images[0] === ''
                    ? noImage
                    : { uri: placeArray[placeNumber].images[0] }
                }
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
                      {placeArray.length != 0
                        ? placeArray[placeNumber].address.addr2
                        : ''}
                    </Text>

                    <Text style={styles.place_text}>
                      {placeArray.length != 0
                        ? placeArray[placeNumber].title
                        : ''}
                    </Text>

                    <View style={styles.row}>
                      <CategoryColorForm
                        category={
                          placeArray.length != 0
                            ? placeArray[placeNumber].rekorCategory
                            : ''
                        }
                      />
                      <View style={styles.line} />
                      <AntDesign
                        name="heart"
                        style={{ fontSize: toSize(12) }}
                        color="#FF7272"
                      />
                      <Text style={styles.sub_text}>
                        {placeArray.length != 0
                          ? placeArray[placeNumber].likeCount + heartAdd
                          : 0}
                      </Text>
                      <AntDesign
                        name="star"
                        style={{ fontSize: toSize(13) }}
                        color="#FDB600"
                      />
                      <Text style={styles.sub_text}>
                        {placeArray.length != 0
                          ? placeArray[placeNumber].rating
                          : 0}
                      </Text>
                    </View>
                    {placeArray.length != 0 && (
                      <FlatList
                        style={styles.tagView}
                        numColumns={3}
                        data={placeArray[placeNumber].tagList}
                        keyExtractor={(item) => item.engTagName.toString()}
                        renderItem={({ item, index }) => (
                          <TagForm tag={item.engTagName} key={index} />
                        )}
                      />
                    )}
                  </View>
                </View>
              </ImageBackground>
            </TouchableWithoutFeedback>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={placeNumber != arrayNum - 1 ? placeDown : null}
            >
              <Ionicons
                name="md-chevron-down"
                size={toSize(30)}
                color={placeNumber != arrayNum - 1 ? '#D3D3D3' : '#fff'}
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
