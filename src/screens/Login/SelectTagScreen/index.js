import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Header from '../../../components/MyHeader';
import TagView from '../../../components/Login/TagView';
import { getTagAPI, saveTagAPI } from '../../../api/Login';
import RKButton from '../../../components/rk/button';
import RKText from '../../../components/rk/text';
import { toSize } from '../../../globalStyle';

export default function SelectTagScreen() {
  const navigation = useNavigation();
  const [confirmCheck, setConfirmCheck] = useState(0);
  const [clickTagData, changeTagData] = useState(Array(21).fill(0));
  const [data, getData] = useState([]);

  useEffect(() => {
    handleTagList();
  }, []);

  useEffect(() => {
    let clickCheck = 0;
    clickTagData.map((item) => {
      item === 1 && clickCheck++;
    });
    setConfirmCheck(clickCheck > 0 ? 1 : 0);
  }, [clickTagData]);

  const handleTagList = async () => {
    getTagAPI()
      .then((response) => {
        response != null && getData(response.slice(0, 21));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nextPage = () => {
    if (confirmCheck === 1) {
      let tagSaveArray = [];
      data.map((item, index) => {
        clickTagData[index] === 1 && tagSaveArray.push(item.tagId.id);
      });

      saveTagAPI(tagSaveArray)
        .then((response) => {
          response === 'SUCCESS' && navigation.navigate('Explore');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.container}>
        <RKText size={20} weight={'900'} color={'#000000'}>
          Select tag
        </RKText>
        <RKText
          size={12}
          weight={'400'}
          color={'#71727A'}
          style={{ marginTop: toSize(4) }}
        >
          Please select the travel tag you want
        </RKText>

        <View style={styles.LikedView}>
          <RKText size={14} weight={'700'}>
            What did you like about it?
          </RKText>
          <TagView
            data={data}
            clickTagData={clickTagData}
            changeTagData={changeTagData}
          />
        </View>

        <View style={styles.buttonView}>
          <RKButton
            text={'Submit'}
            onPress={nextPage}
            disabled={!confirmCheck}
          />
        </View>
      </View>
    </View>
  );
}
