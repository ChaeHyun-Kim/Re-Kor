import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import SearchView from "../../../components/SearchView";
import Bottom from "../../../components/Bottom";
import { toSize } from "../../../globalStyle";
import MarkerCustom from "../../../components/Map/MarkerCustom";
import FirstPlaceView from "../../../components/Map/FirstPlaceView";
import FullMakeCourse from "../../../components/Map/FullMakeCourse";
import SelectMakeCourse from "../../../components/Map/SelectMakeCourse";
import SetMakeCourse from "../../../components/Map/SetMakeCourse";

export default function MakeCourseMainScreen() {
  const fixedLocation = { lat: 37.619186395690605, lng: 127.05828868985176 }; // 서울역 위치
  const fixedLocation1 = { lat: 37.62152994129975, lng: 127.05627425222845 };

  const [location, setLocation] = useState(fixedLocation);
  const [SelectView, setSelectView] = useState(0);

  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
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
        <MarkerCustom location={location} icon={"Heart"} num={1} />
        <MarkerCustom location={fixedLocation1} icon={"Heart"} num={1} />
      </MapView>

      <View style={styles.container}>
        <View style={styles.rowView}>
          <SearchView text={"Search"} />
        </View>
        <View style={styles.MainView}></View>
      </View>

      <View style={styles.bottomView}>
        {SelectView === 0 && (
          <FirstPlaceView
            SelectView={SelectView}
            setSelectView={setSelectView}
          />
        )}
        {SelectView === 1 && (
          <FullMakeCourse
            SelectView={SelectView}
            setSelectView={setSelectView}
          />
        )}
        {SelectView === 2 && (
          <SelectMakeCourse
            SelectView={SelectView}
            setSelectView={setSelectView}
          />
        )}
        {SelectView === 3 && (
          <SetMakeCourse
            SelectView={SelectView}
            setSelectView={setSelectView}
          />
        )}
        <Bottom num={5} border={false} />
      </View>
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
