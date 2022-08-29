import AsyncStorage from "@react-native-async-storage/async-storage";
const uri = "https://kwhcclab.com:20874";

/* 회원가입 정보 중복 확인 */
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
  //   const putValue = data.status === "SUCCESS" ? 1 : 0;
  return data.data;
};
