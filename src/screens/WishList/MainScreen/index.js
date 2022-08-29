import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import TitleInfo from "../../../components/common/TitleInfoScreen";
import { toSize } from "../../../globalStyle";
import PlaceForm from "../../../components/PlaceForm/PlaceForm";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

const WishListMainScreen = () => {
  const items = [
    { id: "option1", label: "Release Wish" },
    { id: "option2", label: "Create a course to that location" },
  ];
  const arr = [
    {
      place_name: "Gapyeong Rail Park1",
      region: "Gapyeong123",
      heartscore: 1,
      starscore: 4.5,
      category: "K-POP",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
    {
      place_name: "Gapyeong1 Rail Park1",
      region: "Gapyeong1234",
      heartscore: 1000,
      starscore: 4.5,
      category: "K-DRAMA",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
    {
      place_name: "Gapyeong1 Rail Park1",
      region: "Gapyeong1234",
      heartscore: 400,
      starscore: 4.5,
      category: "K-DRAMA",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun3", tag_category: "B" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
    {
      place_name: "Gapyeong1 Rail Park1",
      region: "Gapyeong1234",
      heartscore: 400,
      starscore: 4.5,
      category: "K-DRAMA",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun3", tag_category: "B" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
  ];
  const onClickMenu = () => {};
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"Wishlist"} />
      <ScrollView contentContainerStyle={styles.MainView}>
        <TitleInfo title={"Wishlist"} content={"Check your own place "} />
        {arr.map((item, index) => {
          return (
            <PlaceForm
              place_name={item.place_name}
              region={item.region}
              heartScore={item.heartscore}
              starScore={item.starscore}
              category={item.category}
              tag={item.tag}
              key={index}
              menu
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
