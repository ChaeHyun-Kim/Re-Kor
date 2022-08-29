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
    borderColor: "#71727A",
  },
  commonText: {
    fontWeight: "400",
    fontSize: toSize(12),
    paddingVertical: toSize(2),
    paddingHorizontal: toSize(8),
  },
});
