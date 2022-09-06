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

export default function MakeCourseMainScreen({ route }) {
  const { params } = route.params;
  const fixedLocation = { lat: 37.619186395690605, lng: 127.05828868985176 }; // 서울역 위치
  console.log(params.length);
  const [location, setLocation] = useState(fixedLocation);
  const [SelectView, setSelectView] = useState(false);

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
        {/* <MarkerCustom location={location} icon={"Heart"} num={1} /> */}
      </MapView>

      <View style={[styles.container, styles.rowView]}>
        <SearchView text={"Search"} />
      </View>

      <View style={styles.bottomView}>
        {params.length === 0 && <FirstPlaceView />}
        {params.length === 1 && !SelectView && (
          // <FullMakeCourse
          //   SelectView={SelectView}
          //   setSelectView={setSelectView}
          // />
          <SelectMakeCourse
            params={params[0]}
            handleInputCheck={setSelectView}
          />
        )}
        {/* {SelectView === 2 && (
          <SelectMakeCourse
            SelectView={SelectView}
            setSelectView={setSelectView}
          />
        )} */}
        {SelectView && (
          <SetMakeCourse
            params={params}
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
