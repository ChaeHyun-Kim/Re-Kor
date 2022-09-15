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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MakeCourseMainScreen({ route }) {
  const { params } = route.params;
  console.log("초기화되어야 함", params);
  const navigation = useNavigation();

  const fixedLocation = { lat: 37.619186395690605, lng: 127.05828868985176 }; // 서울역 위치

  const [location, setLocation] = useState(fixedLocation);
  const [cancelVisible, setCancelVisible] = useState(false);
  const [SelectView, setSelectView] = useState(false);

  // 뒤로가기
  const handleGoBack = async () => {
    setCancelVisible(false);
    await AsyncStorage.removeItem("@makeCourse");
    navigation.goBack();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setCancelVisible(true);
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (params.length === 0) {
      setSelectView(false);
    } else if (params.length === 1) {
      setLocation({ lat: params[0].mapy, lng: params[0].mapx });
    }
  }, [params]);

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
        {params.length === 1 && (
          <MarkerCustom
            location={location}
            icon={params[0].type === "wish" ? "Heart" : "wish"}
            num={1}
          />
        )}
      </MapView>

      <View style={[styles.container, styles.rowView]}>
        <SearchView text={"Search"} />
      </View>

      <View style={styles.bottomView}>
        {params.length === 0 && <FirstPlaceView />}
        {params.length >= 1 && !SelectView && (
          <SelectMakeCourse
            params={params[params.length - 1]}
            num={params.length}
            handleInputCheck={setSelectView}
          />
        )}
        {SelectView && (
          <SetMakeCourse
            params={params}
            SelectView={SelectView}
            setSelectView={setSelectView}
          />
        )}
        <Bottom num={5} border={false} />
      </View>

      {/* 뒤로가기 경고 모달 */}
      <CenterModal
        visible={cancelVisible}
        title={"Do you want to leave the page?"}
        leftPress={() => setCancelVisible(false)}
        rightPress={handleGoBack}
        leftText={"Cancel"}
        rightText={"Action"}
      >
        <Text color={"#000"} lineHeight={15}>
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
});
