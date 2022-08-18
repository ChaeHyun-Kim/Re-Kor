import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../../globalStyle";

const TagColor = (tag_category) => {
  switch (tag_category) {
    case "A":
      return styles.Tag_color1;
    case "B":
      return styles.Tag_color2;
    case "C":
      return styles.Tag_color3;
  }
};
const TagForm = ({ tag }) => {
  return (
    <View style={styles.TagView}>
      <View style={[styles.commonView, TagColor(tag.tag_category)]}>
        <Text style={[styles.commonText, TagColor(tag.tag_category)]}>
          {tag.tag_name}
        </Text>
      </View>
    </View>
  );
};
export default TagForm;

const styles = StyleSheet.create({
  TagView: {
    marginRight: toSize(4),
  },
  commonView: { borderWidth: 1, borderRadius: 20, backgroundColor: "#FFFFFF" },
  commonText: {
    fontWeight: "400",
    fontSize: toSize(12),
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(8),
  },

  Tag_color1: {
    color: "#5CCEFF",
    borderColor: "#5CCEFF",
  },
  Tag_color2: {
    color: "#FFD15C",
    borderColor: "#FFD15C",
  },

  Tag_color3: {
    color: "#FFB2B2",
    borderColor: "#FFB2B2",
  },
});
