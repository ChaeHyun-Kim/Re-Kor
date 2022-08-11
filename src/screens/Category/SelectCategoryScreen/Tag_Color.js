const CategoryColorChage = (category) => {
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

const styles = StyleSheet.create({
  Drama_Category: {
    color: "#FFF",
    backgroundColor: "#FDD692",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Landscape_Category: {
    color: "#FFF",
    backgroundColor: "#CFF09E",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Culture_Category: {
    color: "#FFF",
    backgroundColor: "#D09E88",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Food_Category: {
    color: "#FFF",
    backgroundColor: "#F26D5B",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Pop_Category: {
    color: "#FFF",
    backgroundColor: "#A593E0",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Festival_Category: {
    color: "#FFF",
    backgroundColor: "#F7AA97",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Leisure_Category: {
    color: "#FFF",
    backgroundColor: "#52616A",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Shopping_Category: {
    color: "#FFF",
    backgroundColor: "#A3DAFF",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
