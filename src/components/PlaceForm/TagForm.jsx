import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../../globalStyle";
const TagForm = ({ tag }) => {
  return (
    <View style={styles.TagView}>
      <View style={styles.commonView}>
        <Text style={styles.commonText}>#{tag}</Text>
      </View>
    </View>
  );
};
export default TagForm;

const styles = StyleSheet.create({
  TagView: {
    marginRight: toSize(4),
    marginBottom: toSize(4),
  },
  commonView: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    borderColor: "#D4D6DD",
    justifyContent: "center",
    alignItems: "center",
    height: toSize(18),
    paddingHorizontal: toSize(8),
  },
  commonText: {
    fontWeight: "400",
    color: "#71727A",
    fontSize: toSize(12),
  },
});
