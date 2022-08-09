import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

// tag_name={item.tag_name}
// tag_category={item.tag_category}
const TagColorChage = (tag_category) => {
  switch (tag_category) {
    case "A":
      return styles.Tag_cat1;
    case "B":
      return styles.Tag_cat2;
    case "C":
      return styles.Tag_cat3;
  }
};
const TagForm = ({ tag_name, tag_category }) => {
  return (
    <View style={styles.TagView}>
      <Text style={TagColorChage(tag_category)}>{tag_name}</Text>
    </View>
  );
};
export default TagForm;

const styles = StyleSheet.create({
  TagView: {
    marginRight: 3,
  },
  Tag_cat1: {
    color: "#5CCEFF",
    fontWeight: "400",
    borderColor: "#5CCEFF",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  Tag_cat2: {
    color: "#FFD15C",
    fontWeight: "400",
    borderColor: "#FFD15C",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  Tag_cat3: {
    color: "#FFB2B2",
    fontWeight: "400",
    borderColor: "#FFB2B2",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
