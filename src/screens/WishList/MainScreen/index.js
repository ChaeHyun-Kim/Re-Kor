import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import TitleInfo from "../../../components/common/TitleInfoScreen";
import { toSize } from "../../../globalStyle";
import WishPlaceForm from "../../../components/WishPlaceForm";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { wishListAPI } from "../../../api/WishList";
import React, { useEffect, useState } from "react";
import { addWishListAPI } from "../../../api/Explore";

const noImage = require("../../../images/noImage.png");

const WishListMainScreen = () => {
  const navigation = useNavigation();
  const [Data, getData] = useState([]);
  const [reset, setReset] = useState(false);

  const items = [
    { id: "delete", label: "Release Wish" },
    {
      id: "map",
      label: "Create a course to that location",
    },
  ];

  const onClickMenu = (itemId, placeId) => {
    if (itemId === "delete") {
      addWishListAPI(placeId)
        .then((response) => {
          if (response != null) {
            setReset(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (itemId === "map") {
      handleNextScreen();
    }
  };

  const handleNextScreen = () => {
    const params = [
      {
        id: Data[0].spotId.id,
        placeName: Data[0].title,
        addr: Data[0].address.addr1.split(" ")[1],
        cat: Data[0].rekorCategory,
        img: Data[0].images[0] ? { uri: Data[0].images[0] } : noImage,
        type: "wish",
        mapx: parseFloat(Data[0].address.mapx),
        mapy: parseFloat(Data[0].address.mapy),
      },
    ];
    navigation.navigate("MakeCourse", { params: params });
  };

  useEffect(() => {
    handleWishList();
    setReset(false);
  }, [reset]);

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
            <WishPlaceForm
              data={item}
              place_name={item.title}
              region={item.address.addr1}
              category={item.rekorCategory}
              heartScore={item.likeCount}
              starScore={item.rating}
              tagList={item.tagList}
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
    paddingBottom: toSize(30),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: "700",
    color: "black",
  },
});
