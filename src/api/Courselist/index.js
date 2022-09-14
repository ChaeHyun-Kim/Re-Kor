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

/* 폴더 이름 변경하기 */
export const RenameFolderAPI = async (folderId, newName) => {
  if (newName === "") {
    newName = "Folder";
  }
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/course/folder/name", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken.slice(1, -1),
    },
    body: JSON.stringify({
      id: folderId,
      name: newName,
    }),
  });
  const data = await response.json();
  console.log("폴더 이름 변경", data.status);
  return data.status;
};

/* 폴더 이름 변경하기 */
export const RenameCourseAPI = async (courseId, newName) => {
  const userToken = await AsyncStorage.getItem("accessToken");
  const response = await fetch(uri + "/api/course/name", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken.slice(1, -1),
    },
    body: JSON.stringify({
      id: courseId,
      name: newName,
    }),
  });
  const data = await response.json();
  console.log(data.status);
  return data.status;
};
