import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import CourseView from '../../../components/Course/CourseView';
import { toSize } from '../../../globalStyle';
import CourseBackHeader from '../../../components/CourseBackHeader';
import AutoScrollView from 'react-native-auto-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const MoveCourseOrder = ({ route }) => {
  const Folderdata = route.params.Folderdata;
  const Coursedata = Folderdata.course;
  const handleSelect = () => {
    navigation.navigate('CourseList');
  };

  const navigation = useNavigation();
  const [changeCheck, setChangeCheck] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CourseBackHeader title="Change the order" />
      <AutoScrollView style={styles.MainView}>
        <View style={{ padding: toSize(2), marginBottom: toSize(16) }}>
          <View style={styles.ListView}>
            <FontAwesome name="folder" size={20} color="#71727A" />

            <View style={styles.textView}>
              <Text style={styles.mainText}>{Folderdata.folder}</Text>

              <Text style={styles.numText}>{Folderdata.course.length}</Text>
            </View>
          </View>
        </View>
        {/* <DraggableFlatList
          data={datass}
          renderItem={renderItem()}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={5}

          // onMoveEnd={(itemOrder)=>this.dragRelease(itemOrder)}
        /> */}
        {Coursedata.map((item, index) => (
          <CourseView partcoursedata={item} courseindex={index} />
        ))}
        <View style={{ height: toSize(50) }}></View>
      </AutoScrollView>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.BottomView,
            changeCheck
              ? { backgroundColor: '#FFCC00' }
              : { borderColor: '#FFCC00', borderWidth: 2 },
          ]}
          onPress={() => {
            changeCheck && handleSelect();
          }}
        >
          <Text
            style={[
              styles.BottomButtonText,
              changeCheck ? { color: '#FFFFFF' } : { color: '#FFCC00' },
            ]}
          >
            Select
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MoveCourseOrder;
