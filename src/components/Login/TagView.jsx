import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { toSize } from "../../globalStyle";

export default function TagView({ data, clickTagData, changeTagData }) {
  const clickTag = (index) => () => {
    const array = [];
    clickTagData.map((item, i) => {
      if (index === i) {
        item === 0 ? array.push(1) : array.push(0);
      } else if (item === 1) {
        array.push(1);
      } else {
        array.push(0);
      }
    });
    changeTagData(array);
  };
  return (
    <View style={styles.LikedCheck}>
      <View style={styles.TagView}>
        <FlatList
          columnWrapperStyle={{
            justifyContent: "center",
            marginBottom: toSize(23),
          }}
          indicatorStyle={{ marginHorizontal: toSize(16) }}
          numColumns={3}
          data={data}
          keyExtractor={(item) => item.tagId.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={clickTag(index)}>
              <Text
                key={index}
                style={[
                  styles.Tag,
                  clickTagData[index] === 0
                    ? { backgroundColor: "#FFF6D3", color: "#FFCC00" }
                    : { backgroundColor: "#FFCC00", color: "#fff" },
                ]}
              >
                {"#" + item.engTagName}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LikedCheck: {
    marginTop: toSize(20),
  },
  TagView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Tag: {
    paddingHorizontal: toSize(10),
    paddingVertical: toSize(8),
    borderRadius: toSize(12),
    textAlign: "center",
    fontWeight: "600",
    fontSize: toSize(13),
    marginHorizontal: toSize(8),
  },
});
