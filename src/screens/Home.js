import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import { WithLocalSvg } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";

import user_character from "../icons/user_character.svg";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.mainview}>
        <View style={styles.user_information}>
          <View style={styles.row_view}>
            <Text style={styles.welcome_text}>
              Hi, Gayoung :){"\n"}I'll recommend it to you again!
            </Text>
            <WithLocalSvg
              style={{ fontSize: responsiveScreenFontSize(4) }}
              asset={user_character}
            />
          </View>
          <View style={styles.row_view_unit}>
            <View style={styles.column_view}>
              <Text style={styles.unit}>USD</Text>
              <Text style={styles.unit_view}>1 $</Text>
            </View>
            <View style={styles.column_view}>
              <Text style={styles.unit}></Text>
              <Text style={styles.equal}>=</Text>
            </View>
            <View style={styles.column_view}>
              <Text style={styles.unit}>KRW</Text>
              <Text style={styles.unit_view}>1,301.00 won</Text>
            </View>
          </View>
        </View>

        <View style={styles.recommend_view}>
          <Text style={styles.recommend_title}>Today's recommended place</Text>
          <View style={styles.place_view}>
            <MaterialIcons
              name="keyboard-arrow-up"
              style={{ fontSize: responsiveScreenFontSize(3) }}
              color="#D3D3D3"
            />
            <View style={styles.picture}></View>
            <MaterialIcons
              name="keyboard-arrow-down"
              style={{ fontSize: responsiveScreenFontSize(3) }}
              color="#D3D3D3"
            />
          </View>
        </View>
      </View>
      <Bottom num={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainview: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
  user_information: {
    backgroundColor: "white",
    width: responsiveScreenWidth(90),
    height: responsiveScreenWidth(90)/2.5,
    marginTop: 24,
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 19,
  },
  row_view: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  row_view_unit: {
    flexDirection: "row",
    margin: 10,
  },
  welcome_text: {
    fontSize: 18,
    fontWeight: "300",
    lineHeight: 30,
    borderBottomWidth: 1,
    borderColor: "#EDEDED",
  },
  unit_view: {
    fontSize: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: "400",
    color: "black",
  },
  unit: {
    fontWeight: "700",
    fontSize: 10,
    color: "black",
  },
  column_view: {
    alignItems: "center",
    justifyContent: "center",
  },
  equal: {
    marginHorizontal: 10,
  },
  recommend_view: {
    width: responsiveScreenWidth(90),
    marginTop: 29,
  },
  recommend_title: {
    fontWeight: "800",
    fontSize: 18,
    color: "black",
  },
  place_view: {
    marginVertical: 10,
    alignItems: "center",
  },
  picture: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenWidth(70),
    backgroundColor: "pink",
  },
});
