import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import { toSize } from "../../../globalStyle";
import WishPlaceForm from "../../../components/WishPlaceForm";
const WishListMainScreen = () => {
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
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"Wishlist"} />
      <View style={styles.MainView}>
        {arr.map((item, index) => {
          return (
            <WishPlaceForm
              place_name={item.place_name}
              region={item.region}
              heartscore={item.heartscore}
              starscore={item.starscore}
              category={item.category}
              tag={item.tag}
              key={index}
            />
          );
        })}
      </View>
      <Bottom num={4} />
    </View>
  );
};
export default WishListMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  MainView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: toSize(22),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: "700",
    color: "black",
  },
});
