import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

// tag_name={item.tag_name}
// tag_category={item.tag_category}
const TagColorChange = (tag_category) => {
  switch (tag_category) {
    case "A":
      return styles.Tag_cat1;
    case "B":
      return styles.Tag_cat2;
    case "C":
      return styles.Tag_cat3;
  }
};
// const TagForm = ({ tag_name, tag_category }) => {
const TagForm = ({ tag }) => {
  return (
    <View style={styles.TagView}>
      <Text style={TagColorChange(tag.tag_category)}>{tag.tag_name}</Text>
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
    fontSize: toSize(8),
    borderColor: "#5CCEFF",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  Tag_cat2: {
    color: "#FFD15C",
    fontWeight: "400",
    borderColor: "#FFD15C",
    fontSize: toSize(8),
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  Tag_cat3: {
    color: "#FFB2B2",
    fontSize: toSize(8),
    fontWeight: "400",
    borderColor: "#FFB2B2",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
