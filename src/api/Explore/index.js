import AsyncStorage from "@react-native-async-storage/async-storage";
const uri = "https://kwhcclab.com:20874";

/* 관광지 검색하기 */
export const searchPlaceAPI = async (text) => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(
    uri + "/api/tourspot/search?text=" + text + "&page=0",
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

/* 추천 관광지 4개 보여주기 */
export const recommendTourAPI = async () => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/tourspot/recommend", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(userToken),
    },
  });
  const data = await response.json();
  return data.data;
};

/* wishlist 추가 */
export const addWishListAPI = async (id) => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/wishlist/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(userToken),
    },
  });
  const data = await response.json();
  console.log(data);
  return data.data;
};
