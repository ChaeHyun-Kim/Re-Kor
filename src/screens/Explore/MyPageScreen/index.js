import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../components/MyHeader';
import { WithLocalSvg } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toSize } from '../../../globalStyle';
import { AntDesign } from '@expo/vector-icons';
import SettingView from '../../../components/Explore/SettingView.jsx';
import { useNavigation } from '@react-navigation/native';
import { getUserTagList } from '../../../api/Explore';
import { wishListAPI } from '../../../api/WishList';
import { styles } from './styles';

import cat_shoppingLover from '../../../icons/cat_shoppingLover.svg';
import cat_foodFighting from '../../../icons/cat_foodFighting.svg';
import cat_hanbokyi from '../../../icons/cat_hanbokyi.svg';
import cat_suffer from '../../../icons/cat_suffer.svg';
import cat_viewer from '../../../icons/cat_viewer.svg';
import TagForm from '../../../components/PlaceForm/TagForm';
import MessageModal from '../../../components/Modal/MessageModal';

const MyPageScreen = () => {
  const navigation = useNavigation();
  const [userName, getUserName] = useState('');
  const [catNum, getCatNum] = useState('');
  const [data, getData] = useState([]);
  const [wishData, getWishData] = useState([]);
  const [update, setUpdate] = useState(false);

  const HomeLine = require('../../../icons/ic_homeLine.png');
  const noImage = require('../../../images/noImageTitle.png');

  const getUserData = async () => {
    const userNickName = await AsyncStorage.getItem('userNickName');
    const catNumber = await AsyncStorage.getItem('catNumber');
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
      <MessageModal visible={update} handleFunction={setUpdate} />
      <StatusBar style="auto" />
      <Header Title={'My Page'} />
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
                  : catNum === 4
                  ? cat_viewer
                  : noImage
              }
            />
          </View>

          <Image source={HomeLine} style={styles.lineBackView} />
          <View style={styles.userView}>
            <View style={styles.iconView}>
              <AntDesign name="setting" size={toSize(20)} color="white" />
            </View>
            <Text style={styles.Nickname}>{userName}</Text>
            <View style={styles.tagView}>
              {data &&
                data.map((item, index) => {
                  return <TagForm tag={item.engTagName} key={index} />;
                })}
            </View>
            <Text style={styles.WishTitle}>Wishlist</Text>
            {wishData && (
              <ScrollView horizontal={true}>
                <View style={styles.wishView}>
                  {wishData.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() =>
                          navigation.navigate('DetailedScreen', {
                            Content_ID: item.spotId.id,
                          })
                        }
                      >
                        <Image
                          source={
                            item.images[0] === ''
                              ? noImage
                              : { uri: item.images[0] }
                          }
                          style={styles.imageStyle}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            )}
          </View>
        </View>

        <View style={styles.lineView} />
        <View style={styles.settingView}>
          <SettingView
            icon={'setting'}
            content={'Recommended tourist destination'}
            handleFunction={setUpdate}
          />
          <SettingView
            icon={'arrowright'}
            content={'Re-Kor Instructions'}
            handleFunction={setUpdate}
          />
        </View>
      </View>
    </View>
  );
};
export default MyPageScreen;
