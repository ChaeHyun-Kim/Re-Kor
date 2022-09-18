import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { toSize } from "../../../globalStyle";
import ic_loading from "../../../icons/ic_loading.svg";
import filter_arrow from "../../../icons/filter_arrow.svg";
import Category_Header from "../../../components/Category_Header";
import SimplePopupMenu from "react-native-simple-popup-menu";
import PlaceForm from "../../../components/PlaceForm/PlaceForm";
import { categoryListAPI } from "../../../api/Category";

const SelectCategoryScreen = ({ route }) => {
  const { Category, cat } = route.params;
  const [data, getData] = useState([]);
  const [menu, handleMenu] = useState("Name");
  const [loading, setLoading] = useState(false);
  const items = [
    { id: "Name", label: "Name" },
    { id: "Likes", label: "Likes" },
    { id: "Rates", label: "Rates" },
  ];

  useEffect(() => {
    handleList();
  }, [menu]);

  const handleList = async () => {
    categoryListAPI(cat, menu)
      .then((response) => {
        if (response != null) {
          getData(response);
          setLoading(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onMenuPress = (id) => {
    handleMenu(id);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Category_Header title={Category} />
      <View style={styles.MainView}>
        {!loading && (
          <View style={styles.loadingView}>
            <Feather name="loader" size={toSize(30)} color="#5F5F5F" />
          </View>
        )}

        <ScrollView
          contentContainerStyle={styles.listView}
          nestedScrollEnabled={true}
        >
          {loading && (
            <View style={styles.FilterView}>
              <SimplePopupMenu
                items={items}
                style={styles.button}
                onSelect={(items) => {
                  onMenuPress(items.id);
                }}
                onCancel={() => console.log("onCancel")}
              >
                <View style={styles.filterMenuView}>
                  <WithLocalSvg asset={filter_arrow} />
                  <Text style={styles.filterMenuText}>{menu}</Text>
                  <SimpleLineIcons
                    name="arrow-down"
                    size={toSize(10)}
                    color="#C5C6CC"
                  />
                </View>
              </SimplePopupMenu>
            </View>
          )}
          {data.map((item, index) => {
            return (
              <PlaceForm
                data={item}
                place_name={item.title}
                region={item.address.addr1}
                heartScore={item.likeCount}
                starScore={item.rating}
                tagList={item.tagList}
                images={item.images}
                id={item.spotId.id}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectCategoryScreen;

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
  FilterView: {
    marginBottom: toSize(13),
  },
  button: { alignItems: "flex-end" },
  filterMenuView: {
    paddingHorizontal: toSize(12),
    paddingVertical: toSize(8),
    flexDirection: "row",
    borderColor: "#E9E9E9",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  filterMenuText: {
    color: "#1F2024",
    fontSize: toSize(12),
    fontWeight: "400",
    paddingRight: toSize(12),
    paddingLeft: toSize(8),
  },
  listView: {
    backgroundColor: "#fff",
    paddingHorizontal: responsiveScreenWidth(5),
    width: "100%",
  },
  loadingView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingBottom: toSize(100),
  },
});
