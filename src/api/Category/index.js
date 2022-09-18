import AsyncStorage from "@react-native-async-storage/async-storage";
const uri = "https://kwhcclab.com:20874";

/* 카테고리별 관광지 list 불러오기 */
export const categoryListAPI = async (cat, menu) => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(
    uri + "/api/tourspot/category?cat=" + cat + "&page=0&sort=" + menu,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(userToken),
      },
    }
  );
  const data = await response.json();
  return data.data;
};

/* 관광지 상세 정보 불러오기 */
export const detailedInfoAPI = async (spotId) => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/tourspot/detail/" + spotId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(userToken),
    },
  });

  const data = await response.json();
  return data.data;
};

/* 리뷰 저장하기 */
export const saveReviewAPI = async (spotId, rating, text, TagList) => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken.slice(1, -1),
    },
    body: JSON.stringify({
      spotId: String(spotId),
      rating: String(rating),
      text: text,
      tagList: TagList,
    }),
  });
  const data = await response.json();
  const putValue = data.status === "SUCCESS" ? 1 : 0;
  return putValue;
};

export const similarInfoAPI = async (spotId) => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(
    uri + "/api/tourspot/detail/" + spotId + "/similar",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(userToken),
      },
    }
  );

  const data = await response.json();
  return data.data;
};
