import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

import { toSize } from "../../../globalStyle";

import Category_Header from "../../../components/Category_Header";
import PlaceForm from "../../../components/Map/PlaceForm";
import FilterCheckView from "../../../components/Map/FilterCheckView";
import { wishListAPI } from "../../../api/WishList";
import { recommendTourAPI } from "../../../api/Explore";

const SelectPlaceScreen = ({ route }) => {
  const { params } = route.params;
  console.log("params", params);
  const [recommendData, getRecommendData] = useState([]);
  const [wishData, getWishData] = useState([]);
  const [click, setClick] = useState("recommended");

  useEffect(() => {
    handleRecommendedList();
    handleWishList();
  }, []);

  const handleRecommendedList = async () => {
    recommendTourAPI()
      .then((response) => {
        if (response != null) {
          getRecommendData(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWishList = async () => {
    wishListAPI()
      .then((response) => {
        if (response != null) {
          getWishData(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Category_Header title={"Select the your place"} />
      <View style={styles.MainView}>
        <FilterCheckView click={click} setClick={setClick} />

        <ScrollView
          contentContainerStyle={styles.listView}
          nestedScrollEnabled={true}
        >
          {recommendData.length != 0 &&
            click === "recommended" &&
            recommendData.map((item) => {
              return (
                <PlaceForm
                  data={item}
                  key={item.spotId.id}
                  type={"recommend"}
                  params={params}
                />
              );
            })}

          {wishData.length != 0 &&
            click === "wish" &&
            wishData.map((item) => {
              return (
                <PlaceForm
                  data={item}
                  key={item.spotId.id}
                  type={"wish"}
                  params={params}
                />
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectPlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  MainView: {
    flex: 1,
    backgroundColor: "#fff",
    width: responsiveScreenWidth(100),
    alignItems: "center",
    marginVertical: toSize(4),
  },
  listView: {
    backgroundColor: "#fff",
    paddingHorizontal: toSize(24),
    marginTop: toSize(19),
    width: "100%",
  },
});
