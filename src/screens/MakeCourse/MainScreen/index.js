import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// import SearchView from "../../../components/SearchView";
import Bottom from "../../../components/Bottom";
import { toSize } from "../../../globalStyle";

const MakeCourseMainScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SearchView /> */}
      <View style={styles.MainView}></View>
      <Bottom num={5} />
    </View>
  );
};
export default MakeCourseMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MainView: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: toSize(24),
    marginVertical: toSize(22),
  },
});
