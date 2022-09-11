import AsyncStorage from "@react-native-async-storage/async-storage";
const uri = "https://kwhcclab.com:20874";

// /* 관광지 검색하기 */
// export const searchPlaceAPI = async (text) => {
//   const userToken = await AsyncStorage.getItem("accessToken");
//   const response = await fetch(
//     uri + "/api/tourspot/search?text=" + text + "&page=0",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + JSON.parse(userToken),
//       },
//     }
//   );
//   const data = await response.json();
//   return data.data;
// };

/* 폴더 추가하기 */
export const MakeCourseAPI = async (courseName, spotList) => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/course/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken.slice(1, -1),
    },
    body: JSON.stringify({
      name: courseName,
      spots: spotList,
    }),
  });
  const data = await response.json();
  return data.status;
};
