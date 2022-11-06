import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header';
import { AntDesign } from '@expo/vector-icons';
import Bottom from '../../../components/Bottom';
import ListView from '../../../components/Course/FirstView';
import { toSize } from '../../../globalStyle';
import { CourseListAPI, AddFolderAPI } from '../../../api/Courselist';
import TitleInfo from '../../../components/common/TitleInfoScreen';
import { useIsFocused } from '@react-navigation/native';
import { styles } from './styles';

const CourseListMainScreen = () => {
  const emptyfolder = [{ folderName: 'New Folder', courseList: [] }];
  const [courseList, setCourseList] = useState([]);
  const isFocused = useIsFocused();

  const handleList = async () => {
    CourseListAPI()
      .then((response) => {
        if (response != null) {
          setCourseList(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AddFolder = async () => {
    AddFolderAPI()
      .then((response) => {
        console.log('폴더 추가');
      })
      .catch((error) => {
        console.log('에러', error);
      });
  };

  useEffect(() => {
    handleList();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={'CourseList'} />
      <ScrollView style={styles.MainView}>
        <TitleInfo
          title={'CourseList'}
          content={'Check out the course that was made'}
        />

        {courseList.map((item, index) => {
          return (
            <ListView
              key={index}
              courseList={courseList}
              partdata={item}
              folderindex={index}
              setCourseList={setCourseList}
            />
          );
        })}
        <View style={{ height: toSize(50) }} />
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          fontSize: toSize(60),
          position: 'absolute',
          bottom: toSize(110),
          right: toSize(23),
          zIndex: 100,
        }}
        onPress={() => {
          setCourseList(courseList.concat(emptyfolder));
          AddFolder();
          handleList();
        }}
      >
        <View
          style={{
            padding: toSize(18),
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#D4D6DD',
            backgroundColor: '#FFF',
          }}
        >
          <AntDesign name="addfolder" size={28} color="#5F5F5F" />
        </View>
      </TouchableOpacity>
      <Bottom num={3} />
    </View>
  );
};
export default CourseListMainScreen;
