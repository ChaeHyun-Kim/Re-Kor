import React, { useState, useEffect } from "react";
import { StyleSheet, View, BackHandler, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import SearchView from "../../../components/SearchView";
import Bottom from "../../../components/Bottom";
import { toSize } from "../../../globalStyle";
import MarkerCustom from "../../../components/Map/MarkerCustom";
import FirstPlaceView from "../../../components/Map/FirstPlaceView";
import SelectMakeCourse from "../../../components/Map/SelectMakeCourse";
import SetMakeCourse from "../../../components/Map/SetMakeCourse";
import CenterModal from "../../../components/Modal/CenterModal";

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

  // // 뒤로가기
  // const handleGoBack = async () => {
  //   setCancelVisible(false);
  //   navigation.goBack();
  // };

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     () => {
  //       setCancelVisible(true);
  //       return true;
  //     }
  //   );
  //   return () => backHandler.remove();
  // }, []);

  const [isPressed, setIsPressed] = useState(false);
  const [event, setEvent] = useState();

  // 네비게이션 이동 감지
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (isPressed) {
          return;
        }
        e.preventDefault();
        setEvent(e);
        setCancelVisible(true);
      }),
    [isPressed, navigation]
  );

  useEffect(() => {
    if (paramsData.length === 0) {
      setSelectView(false);
    } else if (paramsData.length === 1) {
      setLocation({ lat: paramsData[0].mapy, lng: paramsData[0].mapx });
    }
  }, [paramsData]);

  return (
    <View style={styles.fullscreen}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.lat - 0.0006,
          longitude: location.lng,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
      >
        {paramsData.length === 1 && (
          <MarkerCustom
            location={location}
            icon={paramsData[0].type === "wish" ? "Heart" : "wish"}
            num={1}
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
        title={"Do you want to leave the page?"}
        leftPress={() => setCancelVisible(false)}
        rightPress={() => {
          setIsPressed(true);
          setCancelVisible(false);
          navigation.goBack();
        }}
        leftText={"Cancel"}
        rightText={"Action"}
      >
        <Text style={styles.backText}>
          {"If you leave this page, your changes may not be saved."}
        </Text>
      </CenterModal>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    flex: 1,
  },
  map: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
  },
  container: {
    position: "absolute",
    width: "90%",
    marginTop: toSize(44),
    flex: 1,
  },
  MainView: {
    flex: 1,
    marginHorizontal: toSize(24),
    marginVertical: toSize(22),
  },
  rowView: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  backText: {
    fontWeight: "400",
    fontSize: toSize(13),
    color: "#000",
  },
});
