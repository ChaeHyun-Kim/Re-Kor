import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../../globalStyle";
const TagForm = ({ tag, user }) => {
  return (
    <View style={styles.TagView}>
      <View
        style={[
          styles.commonView,
          user ? { borderRadius: 20 } : { borderRadius: 4 },
        ]}
      >
        <Text
          style={[
            styles.commonText,
            user ? { fontSize: toSize(10) } : { fontSize: toSize(12) },
          ]}
        >
          #{tag}
        </Text>
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
  },
});
