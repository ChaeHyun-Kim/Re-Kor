import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import SearchView from "../../../components/SearchView";
import RecentView from "../../../components/RecentView";
import PlaceForm from "../../../components/PlaceForm/PlaceForm";
import { searchPlaceAPI } from "../../../api/Explore";

const SearchTravelScreen = () => {
  const navigation = useNavigation();
  const [search, setChangeSearch] = useState("");
  const [showPlace, handelShowPlace] = useState(true);
  const SearchArray = [
    // { num: 1, content: "Gapyeong Rail Park" },
    // { num: 2, content: "Kwangwoon University" },
  ];
  const [searchData, getSearchData] = useState([]);

  const handelSearchPlace = async () => {
    if (search.length <= 2) {
      Alert.alert("2자 이상 입력해주세요.");
    } else {
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
            <Text style={styles.recentMainText}>Recent Search</Text>
            {SearchArray.map((array, key) => (
              <RecentView content={array.content} key={key} />
            ))}
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.MainView}
            style={styles.ScrollView}
          >
            {searchData.map((item, index) => {
              return (
                <PlaceForm
                  place_name={item.title}
                  region={item.address.addr1}
                  category={item.rekorCategory}
                  heartScore={item.likeCount}
                  starScore={item.rating}
                  tags={item.tags}
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
    marginTop: toSize(44),
  },
  RecentSearchView: {
    marginTop: toSize(22),
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
