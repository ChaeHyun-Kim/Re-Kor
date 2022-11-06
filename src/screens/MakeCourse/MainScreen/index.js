import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Bottom from '../../../components/Bottom';
import MarkerCustom from '../../../components/Map/MarkerCustom';
import FirstPlaceView from '../../../components/Map/FirstPlaceView';
import SelectMakeCourse from '../../../components/Map/SelectMakeCourse';
import SetMakeCourse from '../../../components/Map/SetMakeCourse';
import CenterModal from '../../../components/Modal/CenterModal';

export default function MakeCourseMainScreen({ route }) {
  const { params } = route.params;
  const [paramsData, setParamsData] = useState(params);

  const navigation = useNavigation();

  const fixedLocation = { lat: 37.619186395690605, lng: 127.05828868985176 }; // 서울역 위치

  const [location, setLocation] = useState(fixedLocation);
  const [cancelVisible, setCancelVisible] = useState(false);
  const [SelectView, setSelectView] = useState(false);

  useEffect(() => {
    setParamsData(params);
    setIsPressed(false);
  }, [params]);

  const [isPressed, setIsPressed] = useState(false);

  // 네비게이션 이동 감지
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (isPressed) {
          return;
        }
        e.preventDefault();
        setCancelVisible(true);
      }),
    [isPressed, navigation],
  );
  useEffect(() => {
    if (paramsData.length === 0) {
      setSelectView(false);
    } else {
      setLocation({
        lat: params[params.length - 1].mapy,
        lng: params[params.length - 1].mapx,
      });
    }
  }, [paramsData]);

  return (
    <View style={styles.fullscreen}>
      <MapView
        style={styles.map}
        region={
          params.length !== 0
            ? {
                latitude: params[params.length - 1].mapy - 0.0006,
                longitude: params[params.length - 1].mapx,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
              }
            : {
                latitude: location.lat - 0.0006,
                longitude: location.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
              }
        }
      >
        {params.length > 0 && (
          <MarkerCustom
            location={{
              lat: params[params.length - 1].mapy,
              lng: params[params.length - 1].mapx,
            }}
            icon={params[params.length - 1].type === 'wish' ? 'Heart' : 'wish'}
            num={params.length}
          />
        )}
      </MapView>

      {/* <View style={[styles.container, styles.rowView]}>
        <SearchView text={"Search"} />
      </View> */}

      <View style={styles.bottomView}>
        {paramsData.length === 0 && <FirstPlaceView />}
        {paramsData.length >= 1 && !SelectView && (
          <SelectMakeCourse
            params={paramsData[paramsData.length - 1]}
            num={paramsData.length}
            handleInputCheck={setSelectView}
          />
        )}
        {SelectView && (
          <SetMakeCourse
            params={paramsData}
            SelectView={SelectView}
            setSelectView={setSelectView}
            setParamsData={setParamsData}
          />
        )}
        <Bottom
          num={5}
          border={false}
          nextPage={setCancelVisible}
          visible={setIsPressed}
        />
      </View>

      {/* 뒤로가기 경고 모달 */}
      <CenterModal
        visible={cancelVisible}
        title={'Do you want to leave the page?'}
        leftPress={() => setCancelVisible(false)}
        rightPress={() => {
          setIsPressed(true);
          setCancelVisible(false);
          navigation.goBack();
        }}
        leftText={'Cancel'}
        rightText={'Action'}
      >
        <Text style={styles.backText}>
          {'If you leave this page, your changes may not be saved.'}
        </Text>
      </CenterModal>
    </View>
  );
}
