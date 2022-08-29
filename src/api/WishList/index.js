import AsyncStorage from "@react-native-async-storage/async-storage";
const uri = "https://kwhcclab.com:20874";

/* wishList 조회 */
export const wishListAPI = async () => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/wishlist", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(userToken),
    },
  });
  const data = await response.json();
  return data.data;
};
