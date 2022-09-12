import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import TagForm from "./TagForm";
import { useNavigation } from "@react-navigation/native";
import CategoryColorForm from "./CategoryColorForm";
import SimplePopupMenu from "react-native-simple-popup-menu";

const noImage = require("../../../src/images/noImage.png");
const PlaceForm = ({
  data,
  place_name,
  region,
  heartScore,
  starScore,
  tagList,
  category,
  menu,
  items,
  images,
  onClickMenu,
}) => {
  const navigation = useNavigation();

  return (
    <>
      {place_name !== "" && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("DetailedScreen", {
              Content_ID: data.spotId.id,
            })
          }
          style={styles.CategoryView}
        >
          <Image
            style={styles.picture}
            source={images[0] ? { uri: images[0] } : noImage}
          />
          <View style={styles.PlaceView}>
            <View style={styles.InfoView}>
              <View style={styles.rowView}>
                <Text numberOfLines={1} style={styles.Place_Text}>
                  {place_name}
                </Text>
                {menu && (
                  <SimplePopupMenu
                    customStyles={{ Option: styles.popupText }}
                    items={items}
                    onSelect={(items) => onClickMenu(items.id, data.spotId.id)}
                    onCancel={() => console.log("onCancel")}
                    cancelLabel={"Cancel"}
                  >
                    <AntDesign
                      name="ellipsis1"
                      size={toSize(22)}
                      color="#D4D6DD"
                    />
                  </SimplePopupMenu>
                )}
              </View>
              <Text style={styles.Region_Text}>{region.split(" ")[1]}</Text>

              <View style={styles.ScoreView}>
                <AntDesign
                  name="heart"
                  style={{ fontSize: toSize(13) }}
                  color="#FF7272"
                />
                <Text style={styles.Score_Text}>{heartScore}</Text>
                <AntDesign
                  name="star"
                  style={{ fontSize: toSize(13) }}
                  color="#FDB600"
                />
                <Text style={styles.Score_Text}>{starScore}</Text>
              </View>
            </View>
            {category && <CategoryColorForm category={category} />}

            <View style={styles.tagView}>
              {tagList.map((item, index) => {
                if (index < 3) {
                  return <TagForm key={index} tag={item.tagName} />;
                }
              })}
            </View>
            <View style={styles.ScoreView}>
              {tagList.map((item, index) => {
                if (index >= 3) {
                  return <TagForm key={index} tag={item.tagName} />;
                }
              })}
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
export default PlaceForm;

const styles = StyleSheet.create({
  CategoryView: {
    width: "100%",
    flexDirection: "row",
    marginBottom: toSize(15),
    backgroundColor: "#fff",
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: "#F5F5F5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picture: {
    width: toSize(105),
    height: toSize(124),
    borderRadius: 17,
  },
  PlaceView: {
    flex: 1,
    paddingHorizontal: toSize(12),
    justifyContent: "center",
  },
  InfoView: {
    marginBottom: toSize(6),
  },
  Place_Text: {
    fontSize: toSize(14),
    fontWeight: "700",
    color: "#1F2024",
  },
  Region_Text: {
    fontSize: toSize(12),
    color: "#71727A",
    fontWeight: "400",
    marginVertical: toSize(1),
  },
  ScoreView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Score_Text: {
    marginLeft: toSize(5),
    marginRight: toSize(8),
    fontSize: toSize(12),
    color: "#000000",
    fontWeight: "700",
  },
  tagView: {
    flexDirection: "row",
    marginTop: toSize(4),
    width: "100%",
  },
  popupText: {
    fontWeight: "400",
    size: toSize(17),
  },
});
