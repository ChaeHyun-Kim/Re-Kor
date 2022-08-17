import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const TagViewColor = (tag_category) => {
  switch (tag_category) {
    case "A":
      return styles.Tag_cat1View;
    case "B":
      return styles.Tag_cat2View;
    case "C":
      return styles.Tag_cat3View;
  }
};
const TagTextColor = (tag_category) => {
  switch (tag_category) {
    case "A":
      return styles.Tag_cat1;
    case "B":
      return styles.Tag_cat2;
    case "C":
      return styles.Tag_cat3;
  }
};
const TagForm = ({ tag }) => {
  return (
    <View style={styles.TagView}>
      <View style={TagViewColor(tag.tag_category)}>
        <Text style={TagTextColor(tag.tag_category)}>{tag.tag_name}</Text>
      </View>
    </View>
  );
};
export default TagForm;

const styles = StyleSheet.create({
  TagView: {
    marginRight: 3,
  },

  Tag_cat1View: {
    borderColor: "#5CCEFF",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },

  Tag_cat1: {
    color: "#5CCEFF",
    fontWeight: "400",
    fontSize: toSize(8),
    paddingVertical: toSize(1),
    paddingHorizontal: toSize(8),
  },

  Tag_cat2View: {
    borderColor: "#FFD15C",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },

  Tag_cat2: {
    color: "#FFD15C",
    fontWeight: "400",
    fontSize: toSize(8),
    paddingVertical: toSize(1),
    paddingHorizontal: toSize(8),
  },

  Tag_cat3View: {
    borderColor: "#FFB2B2",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },

  Tag_cat3: {
    color: "#FFB2B2",
    fontWeight: "400",
    fontSize: toSize(8),
    paddingVertical: toSize(1),
    paddingHorizontal: toSize(8),
  },
});
