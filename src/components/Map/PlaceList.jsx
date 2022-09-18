import React from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { toSize } from "../../globalStyle";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CategoryColorForm from "../PlaceForm/CategoryColorForm";
import { styles } from "../../styles/PlaceListStyle";
const noImage = require("../../../src/images/noImage.png");

const PlaceList = ({ params, num, screenType, deleteFunction }) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={screenType === "complete" ? 0.8 : 1}
        style={styles.CategoryView}
      >
        {screenType === "edit" && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: toSize(12),
            }}
          >
            <TouchableOpacity
              TouchableOpacity={0.8}
              onPress={() => {
                Alert.alert(
                  "Deleting Place",
                  "Are you sure you want to clear the selected place?",
                  [
                    {
                      text: "Action",
                      onPress: () => {
                        deleteFunction(num);
                      },
                    },
                    { text: "Cancel" },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <Entypo
                name="circle-with-minus"
                size={15}
                color="#FF7272"
                style={{ paddingTop: toSize(11) }}
              />
            </TouchableOpacity>
          </View>
        )}

        {num && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: toSize(12),
            }}
          >
            <FontAwesome
              name={
                params.type === "wish"
                  ? "heart"
                  : params.type === "recommend"
                  ? "thumbs-up"
                  : "eye"
              }
              size={toSize(11)}
              color={
                params.type === "wish"
                  ? "#F88E8E"
                  : params.type === "recommend"
                  ? "#A593E0"
                  : "#FFFFFF"
              }
            />
            <View
              style={[
                styles.circle,
                params.type === "wish"
                  ? { backgroundColor: "#FF7272" }
                  : params.type === "recommend"
                  ? { backgroundColor: "#A593E0" }
                  : { backgroundColor: "#A3DAFF" },
              ]}
            >
              <Text style={styles.text}>{num}</Text>
            </View>
          </View>
        )}
        <View style={styles.borderView}>
          <Image
            style={[
              styles.picture,
              screenType === "info"
                ? {
                    width: toSize(92),
                    height: toSize(88),
                  }
                : {
                    width: toSize(83),
                    height: toSize(79),
                  },
            ]}
            source={
              params.img?.uri !== undefined ? { uri: params.img.uri } : noImage
            }
          />
          <View style={styles.PlaceView}>
            <Text style={styles.Place_Text} numberOfLines={1}>
              {params.placeName}
            </Text>

            <Text style={styles.Region_Text}>{params.addr}</Text>
            <CategoryColorForm category={params.cat}></CategoryColorForm>
          </View>
          {screenType === "info" && (
            <TouchableOpacity
              activeOpacity={0.8}
              // style={styles.CategoryView}
              // onPress={() =>
              //   navigation.navigate("DetailedScreen", {
              //     Content_ID: "관광지의 Content_ID",
              //   })
              // }
            >
              <MaterialCommunityIcons
                name="information"
                size={20}
                color="#D4D6DD"
                style={{ margin: toSize(10) }}
              />
            </TouchableOpacity>
          )}
        </View>

        {screenType === "edit" && (
          // <SimpleLineIcons
          //   style={{ paddingLeft: toSize(12) }}
          //   name="menu"
          //   size={14}
          //   color="#D4D6DD"
          // />
          <View style={{ width: "3%" }}></View>
        )}

        <View style={{ width: "3%" }}></View>
      </TouchableOpacity>
    </>
  );
};
export default PlaceList;
