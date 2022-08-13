import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { Marker } from "react-native-maps";
import { toSize, images } from "../../globalStyle.js";

export default function MarkerCustom({ location, icon, num }) {
  // const MarkerSelect =(marker)=>{
  //   switch()
  // }
  return (
    <Marker
      coordinate={{
        latitude: location.lat,
        longitude: location.lng,
      }}
      style={{ zIndex: 100 }}
    >
      <View style={styles.center}>
        <View
          style={[
            styles.circle,
            icon === "Heart" ? { backgroundColor: "#FF7272" } : null,
          ]}
        >
          <Text style={styles.text}>{num}</Text>
        </View>
        <Image
          source={icon === "Heart" ? images.MarkerHeart : null}
          style={{ width: toSize(20) }}
          resizeMode="contain"
        />
      </View>
    </Marker>
  );
}
const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  circle: {
    width: toSize(17),
    height: toSize(17),
    borderRadius: toSize(100) / 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: toSize(3),
  },
  text: {
    fontWeight: "600",
    fontSize: toSize(10),
    color: "#FFF",
  },
});
