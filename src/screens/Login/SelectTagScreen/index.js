import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import Header from "../../../components/MyHeader";
import TagView from "../../../components/Login/TagView";
import { getTagAPI, saveTagAPI } from "../../../api/Login";

export default function SelectTagScreen() {
  const navigation = useNavigation();
  const [confirmCheck, setConfirmCheck] = useState(0);
  const [clickTagData, changeTagData] = useState(Array(21).fill(0));
  const [data, getData] = useState([]);

  useEffect(() => {
    let clickCheck = 0;
    clickTagData.map((item) => {
      if (item === 1) clickCheck++;
    });

    clickCheck > 0 ? setConfirmCheck(1) : setConfirmCheck(0);
  }, [clickTagData]);

  useEffect(() => {
    handleTagList();
  }, []);

  const handleTagList = async () => {
    getTagAPI()
      .then((response) => {
        if (response != null) {
          getData(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nextPage = () => {
    if (confirmCheck === 1) {
      let tagSaveArray = [];
      data.map((item, index) => {
        if (clickTagData[index] === 1) {
          tagSaveArray.push(item.tagId.id);
        }
      });

      saveTagAPI(tagSaveArray)
        .then((response) => {
          if (response === "SUCCESS") {
            navigation.navigate("Explore");
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
      <Header />
      <View style={styles.container}>
        <Text style={styles.MainText}>Select tag</Text>
        <Text style={styles.MainSubText}>
          Please select the travel tag you want
        </Text>

        <View style={styles.LikedView}>
          <Text style={styles.LikedMainText}>What did you like about it?</Text>
          <TagView
            data={data}
            clickTagData={clickTagData}
            changeTagData={changeTagData}
          />
        </View>

        <View
          style={[
            styles.BottomView,
            confirmCheck
              ? { backgroundColor: "#FFCC00" }
              : { borderColor: "#FFCC00", borderWidth: 2 },
          ]}
        >
          <TouchableOpacity activeOpacity={0.8} onPress={nextPage}>
            <Text
              style={[
                styles.BottomButtonText,
                confirmCheck ? { color: "#FFFFFF" } : { color: "#FFCC00" },
              ]}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: "white",
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    flex: 1,
  },
  container: {
    width: responsiveScreenWidth(100) - toSize(48),
    flex: 1,
  },
  FirstView: {
    width: "80%",
    justifyContent: "space-between",
    marginTop: toSize(24),
  },
  MainText: {
    alignItems: "flex-start",
    fontSize: toSize(20),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "900",
  },
  MainSubText: {
    fontSize: toSize(12),
    color: "#71727A",
    fontWeight: "400",
    marginTop: toSize(4),
  },
  BottomTextView: {
    marginLeft: toSize(12),
  },
  BottomView: {
    width: "100%",
    height: toSize(48),
    marginVertical: toSize(24),
    borderRadius: 12,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  BottomButtonText: {
    fontSize: toSize(16),
    fontWeight: "600",
  },

  LikedView: {
    marginTop: toSize(29),
  },
  LikedMainText: {
    fontWeight: "700",
    fontSize: toSize(14),
  },
});
