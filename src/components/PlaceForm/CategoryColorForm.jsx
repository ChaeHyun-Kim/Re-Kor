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
    fontSize: toSize(12),
    backgroundColor: "#FDD692",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1.5),
    paddingHorizontal: toSize(10),
  },
  Landscape_Category: {
    color: "#FFF",
    fontSize: toSize(12),
    backgroundColor: "#CFF09E",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1.5),
    paddingHorizontal: toSize(10),
  },
  Culture_Category: {
    color: "#FFF",
    fontSize: toSize(12),
    backgroundColor: "#D09E88",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1.5),
    paddingHorizontal: toSize(10),
  },
  Food_Category: {
    color: "#FFF",
    fontSize: toSize(12),
    backgroundColor: "#F26D5B",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1.5),
    paddingHorizontal: toSize(10),
  },
  Pop_Category: {
    color: "#FFF",
    fontSize: toSize(12),
    backgroundColor: "#A593E0",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1.5),
    paddingHorizontal: toSize(10),
  },
  Festival_Category: {
    color: "#FFF",
    fontSize: toSize(12),
    backgroundColor: "#F7AA97",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1.5),
    paddingHorizontal: toSize(10),
  },
  Leisure_Category: {
    color: "#FFF",
    fontSize: toSize(12),
    backgroundColor: "#52616A",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1.5),
    paddingHorizontal: toSize(10),
  },
  Shopping_Category: {
    color: "#FFF",
    fontSize: toSize(12),
    backgroundColor: "#A3DAFF",
    fontWeight: "600",
    borderRadius: 12,
    paddingVertical: toSize(1.5),
    paddingHorizontal: toSize(10),
  },
});
