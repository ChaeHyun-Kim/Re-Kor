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
      <Text style={CategoryColor(category)}>{category}</Text>
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
  Drama_Category: {
    color: "#FFF",
    fontSize: toSize(8),
    backgroundColor: "#FDD692",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(6.5),
  },
  Landscape_Category: {
    color: "#FFF",
    fontSize: toSize(8),
    backgroundColor: "#CFF09E",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(6.5),
  },
  Culture_Category: {
    color: "#FFF",
    fontSize: toSize(8),
    backgroundColor: "#D09E88",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(6.5),
  },
  Food_Category: {
    color: "#FFF",
    fontSize: toSize(8),
    backgroundColor: "#F26D5B",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(6.5),
  },
  Pop_Category: {
    color: "#FFF",
    fontSize: toSize(8),
    backgroundColor: "#A593E0",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(6.5),
  },
  Festival_Category: {
    color: "#FFF",
    fontSize: toSize(8),
    backgroundColor: "#F7AA97",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(6.5),
  },
  Leisure_Category: {
    color: "#FFF",
    fontSize: toSize(8),
    backgroundColor: "#52616A",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(6.5),
  },
  Shopping_Category: {
    color: "#FFF",
    fontSize: toSize(8),
    backgroundColor: "#A3DAFF",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(6.5),
  },
});
