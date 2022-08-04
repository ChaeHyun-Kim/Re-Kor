import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import { toSize } from "../../../globalStyle";

const CourseListMainScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"CourseList"} />
      <View style={styles.MainView}>
        <Text style={styles.main_text}>Travel Courses List</Text>
      </View>
      <Bottom num={3} />
    </View>
  );
};
export default CourseListMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MainView: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 43,
    paddingVertical: 31,
  },
  main_text: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
  },
});
