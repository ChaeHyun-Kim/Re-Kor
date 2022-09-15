import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ic_loading from "../../../icons/ic_loading.svg";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import { WithLocalSvg } from "react-native-svg";
import SearchView from "../../../components/SearchView";
import RecentView from "../../../components/RecentView";
import PlaceForm from "../../../components/PlaceForm/PlaceForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { searchPlaceAPI } from "../../../api/Explore";

const SearchTravelScreen = () => {
  const [search, setChangeSearch] = useState("");
  const [showPlace, handelShowPlace] = useState(true);
  const [searchArray, setSearchArray] = useState([]);
  const [searchData, getSearchData] = useState([]);

  const handelSearchPlace = () => {
    if (search !== "") {
      const newData = {
        content: search,
      };
      setSearchArray([newData, ...searchArray]);

      searchPlaceAPI(search)
        .then((response) => {
          if (response != null) {
            getSearchData(response);
            handelShowPlace(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      handelShowPlace(true);
    }
  };
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.rowView}>
          <SearchView
            search={search}
            placeholder={"Search for tags or travel destinations"}
            setChangeSearch={setChangeSearch}
            rightIcon={"arrowleft"}
            onclick={handelSearchPlace}
          />
        </View>
        {showPlace ? (
          <View style={styles.RecentSearchView}>
            {/* <Text style={styles.recentMainText}>Recent Search</Text>
            {searchArray.map((array, key) => (
              <RecentView content={array.content} key={key} />
            ))} */}
            <Text style={styles.recentMainText}>Please search</Text>
            <WithLocalSvg asset={ic_loading} />
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.MainView}
            style={styles.ScrollView}
          >
            {searchData.map((item, index) => {
              return (
                <PlaceForm
                  data={item}
                  place_name={item.title}
                  region={item.address.addr1}
                  category={item.rekorCategory}
                  heartScore={item.likeCount}
                  starScore={item.rating}
                  tagList={item.tagList}
                  images={item.images}
                  key={index}
                  // onClickMenu={onClickMenu}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
export default SearchTravelScreen;

const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    width: "90%",
    marginTop: toSize(50),
  },
  RecentSearchView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: toSize(200),
  },
  recentMainText: {
    fontWeight: "600",
    fontSize: toSize(12),
    color: "#5F5F5F",
    paddingVertical: toSize(7),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  MainView: {
    flexGrow: 1,
  },
  ScrollView: {
    height: toSize(650),
    marginVertical: toSize(30),
  },
});
