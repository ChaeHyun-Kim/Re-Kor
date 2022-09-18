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
      <FlatList
        columnWrapperStyle={{
          marginBottom: toSize(8),
        }}
        numColumns={4}
        data={data}
        keyExtractor={(item) => item.tagId.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={clickTag(index)}>
            <Text
              key={index}
              style={[
                styles.Tag,
                clickTagData[index] === 0
                  ? {
                      backgroundColor: "#fff",
                      color: "#71727A",
                      borderColor: "#D4D6DD",
                    }
                  : {
                      backgroundColor: "#D4D6DD",
                      color: "#fff",
                      borderColor: "#D4D6DD",
                    },
              ]}
            >
              {"#" + item.engTagName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  LikedCheck: {
    marginTop: toSize(12),
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  Tag: {
    paddingHorizontal: toSize(9),
    paddingVertical: toSize(2),
    borderRadius: toSize(4),
    fontWeight: "400",
    fontSize: toSize(12),
    borderWidth: 1,
    marginRight: toSize(5),
  },
});
