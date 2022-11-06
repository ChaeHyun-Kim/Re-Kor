import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import FolderView from '../../../components/Course/FolderView';
import { toSize } from '../../../globalStyle';
import CourseBackHeader from '../../../components/CourseBackHeader';
import AutoScrollView from 'react-native-auto-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { MoveFolderAPI } from '../../../api/Courselist';
import { styles } from './styles';

const MoveFolder = ({ route }) => {
  const Courseid = route.params.Courseid;
  const Folderid = route.params.Folderid;

  const courseList = route.params.courseList;
  const [onlyone, setOnlyone] = useState(Array(courseList.length).fill(false));

  const handleClick = (index) => {
    const newArr = Array(courseList.length).fill(false);
    newArr[index] = true;
    setSelectindex(index);
    setOnlyone(newArr);
    setConfirmCheck(true);
  };
  const [selectindex, setSelectindex] = useState(-1);
  const handleSelect = () => {
    var destid = onlyone.indexOf(true);
    destid = courseList[destid].folderId.id;
    MoveFolderAPI(Courseid, Folderid, destid)
      .then((response) => {
        console.log('폴더이동');

        navigation.navigate('CourseList');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigation = useNavigation();
  const [confirmCheck, setConfirmCheck] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CourseBackHeader title="Move to a different folder" />
      <AutoScrollView style={styles.MainView}>
        {courseList.map((item, index) => {
          return (
            <FolderView
              index={index}
              item={item}
              courselist={courseList}
              folder_name={item.folderName}
              isSelected={onlyone[index]}
              handleClick={handleClick}
            />
          );
        })}
        <View style={{ height: toSize(50) }}></View>
      </AutoScrollView>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.BottomView,
            confirmCheck
              ? { backgroundColor: '#FFCC00' }
              : { borderColor: '#FFCC00', borderWidth: 2 },
          ]}
          onPress={() => {
            confirmCheck && handleSelect();
          }}
        >
          <Text
            style={[
              styles.BottomButtonText,
              confirmCheck ? { color: '#FFFFFF' } : { color: '#FFCC00' },
            ]}
          >
            Select
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MoveFolder;
