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
export const detailedinfoAPI = async (spotId) => {
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
