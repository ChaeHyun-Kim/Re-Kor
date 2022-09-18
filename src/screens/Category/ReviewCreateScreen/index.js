import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import Header from "../../../components/MyHeader";
import { AntDesign } from "@expo/vector-icons";
import { toSize } from "../../../globalStyle";
import { getTagAPI } from "../../../api/Login";
import { saveReviewAPI } from "../../../api/Category";
import TagView from "../../../components/Category/TagView";

export default function ReviewCreateScreen({ route }) {
  const navigation = useNavigation();
  const { params } = route.params;
  const [data, getData] = useState([]);
  const [review, setReview] = useState("");
  const [confirmCheck, setConfirmCheck] = useState(0);
  const [clickTagData, changeTagData] = useState(Array(20).fill(0));
  const [starArray, setStarArray] = useState([1, 0, 0, 0, 0]);

  useEffect(() => {
    handleTagList();
  }, []);

  useEffect(() => {
    let clickCheck = 0;
    clickTagData.map((item) => {
      if (item === 1) clickCheck++;
    });

    clickCheck > 0 && review !== "" ? setConfirmCheck(1) : setConfirmCheck(0);
  }, [clickTagData, review]);

  const handleTagList = async () => {
    getTagAPI()
      .then((response) => {
        if (response != null) {
          getData(response.slice(0, 20));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelChangeArray = (index) => {
    let newArray = [];
    starArray.map((item, i) => {
      if (i <= index) newArray.push(1);
      else newArray.push(0);
    });
    setStarArray(newArray);
  };

  const nextPage = () => {
    let tagSaveArray = [];
    data.map((item, index) => {
      if (clickTagData[index] === 1) {
        tagSaveArray.push(item.tagId.id);
      }
    });
    let rating = 0;
    starArray.map((item) => {
      if (item === 1) rating++;
    });

    saveReviewAPI(params.id, rating, review, tagSaveArray)
      .then((response) => {
        if (response === 1) {
          navigation.navigate("DetailedScreen", {
            Content_ID: params.id,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.navigate("DetailedScreen", {
      Content_ID: params.id,
    });
  };

  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <Header />
      <SafeAreaView style={styles.container}>
        <View style={styles.TitleView}>
          <Text style={styles.MainText}>{params.title}</Text>
          <View style={styles.row}>
            {starArray.map((item, index) => {
              return (
                <AntDesign
                  key={index}
                  name={item === 1 ? "star" : "staro"}
                  size={toSize(20)}
                  color={item === 1 ? "#FFCC00" : "#D4D6DD"}
                  onPress={() => handelChangeArray(index)}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.tagView}>
          <Text style={styles.SelectText}>
            Please select a tag for the place
          </Text>
          <TagView
            data={data}
            clickTagData={clickTagData}
            changeTagData={changeTagData}
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.tagView}>
          <Text style={styles.SelectText}>Please write a review</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setReview}
            value={review}
            placeholder={"Text"}
            multiline
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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={nextPage}
            disabled={confirmCheck !== 1}
          >
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
      </SafeAreaView>
    </View>
  );
}
