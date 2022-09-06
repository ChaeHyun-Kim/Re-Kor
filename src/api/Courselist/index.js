import AsyncStorage from "@react-native-async-storage/async-storage";
const uri = "https://kwhcclab.com:20874";

/* 코스, 폴더 정보 */
export const CourseListAPI = async () => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/course/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken.slice(1, -1),
    },
  });
  const data = await response.json();
  return data.data;
};

/* 폴더 추가하기 */
export const AddFolderAPI = async () => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/course/folder/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken.slice(1, -1),
    },
    body: JSON.stringify({
      folderName: "New Folder",
    }),
  });
  const data = await response.json();
  return data.status;
};
