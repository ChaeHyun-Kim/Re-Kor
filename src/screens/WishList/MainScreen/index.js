import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import TitleInfo from "../../../components/common/TitleInfoScreen";
import { toSize } from "../../../globalStyle";
import PlaceForm from "../../../components/PlaceForm/PlaceForm";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { wishListAPI } from "../../../api/WishList";
import React, { useEffect, useState } from "react";

const WishListMainScreen = () => {
  const items = [
    { id: "option1", label: "Release Wish" },
    { id: "option2", label: "Create a course to that location" },
  ];
  const [Data, getData] = useState([]);
  const onClickMenu = () => {};

  useEffect(() => {
    handleWishList();
  }, []);

  const handleWishList = async () => {
    wishListAPI()
      .then((response) => {
        if (response != null) {
          getData(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"Wishlist"} />
      <ScrollView contentContainerStyle={styles.MainView}>
        <TitleInfo title={"Wishlist"} content={"Check your own place "} />
        {Data.map((item, index) => {
          return (
            <PlaceForm
              data={item}
              place_name={item.title}
              region={item.address.addr1}
              category={item.rekorCategory}
              heartScore={item.likeCount}
              starScore={item.rating}
              tags={item.tagList}
              key={index}
              menu
              images={item.images}
              items={items}
              onClickMenu={onClickMenu}
            />
          );
        })}
      </ScrollView>
      <Bottom num={4} />
    </View>
  );
};
export default WishListMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: responsiveScreenWidth(100),
    alignItems: "center",
  },
  MainView: {
    backgroundColor: "#fff",
    width: responsiveScreenWidth(90),
    justifyContent: "space-between",
    marginVertical: toSize(9),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: "700",
    color: "black",
  },
});
