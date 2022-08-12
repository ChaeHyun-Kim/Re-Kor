import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import SearchView from "../../../components/SearchView";
import Bottom from "../../../components/Bottom";
import { toSize } from "../../../globalStyle";
// import Geolocation from "react-native-geolocation-service";

const MakeCourseMainScreen = () => {
  const fixedLocation = { lat: 37.619186395690605, lng: 127.05828868985176 }; // 서울역 위치

  const [location, setLocation] = useState(fixedLocation);

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
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          title="this is a marker"
          description="this is a marker example"
        />
      </MapView>

      <View style={styles.container}>
        <View style={styles.rowView}>
          <SearchView text={"Search"} />
        </View>
        <View style={styles.MainView}></View>
      </View>

      <View style={styles.bottomView}>
        <Bottom num={5} />
      </View>
    </View>
  );
};
export default MakeCourseMainScreen;

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
