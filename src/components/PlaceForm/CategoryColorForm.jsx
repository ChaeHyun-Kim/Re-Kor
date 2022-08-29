import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../../globalStyle";

const CategoryColor = (category) => {
  switch (category) {
    case "K-LANDSCAPE":
      return styles.Landscape_Category;
    case "K-CULTURE":
      return styles.Drama_Category;
    case "K-FOOD":
      return styles.Food_Category;
    case "K-SHOPPING":
      return styles.Shopping_Category;
    case "K-POP":
      return styles.Pop_Category;
    case "K-DRAMA":
      return styles.Drama_Category;
    case "K-FESTIVAL":
      return styles.Festival_Category;
    case "K-LEISURE":
      return styles.Leisure_Category;
  }
};
const CategoryColorForm = ({ category }) => {
  return (
    <View style={styles.tagView}>
      <Text style={[styles.commonText, CategoryColor(category)]}>
        {category}
      </Text>
    </View>
  );
};

export default CategoryColorForm;

const styles = StyleSheet.create({
  tagView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  commonText: {
    color: "#FFF",
    fontSize: toSize(11),
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1),
    paddingHorizontal: toSize(9),
  },
  Drama_Category: {
    backgroundColor: "#FDD692",
  },
  Landscape_Category: {
    backgroundColor: "#CFF09E",
  },
  Culture_Category: {
    backgroundColor: "#D09E88",
  },
  Food_Category: {
    backgroundColor: "#F26D5B",
  },
  Pop_Category: {
    backgroundColor: "#A593E0",
  },
  Festival_Category: {
    backgroundColor: "#F7AA97",
  },
  Leisure_Category: {
    backgroundColor: "#52616A",
  },
  Shopping_Category: {
    backgroundColor: "#A3DAFF",
  },
});
