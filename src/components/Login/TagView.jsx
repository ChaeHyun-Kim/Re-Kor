import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { toSize } from '../../globalStyle';
import RKText from '../rk/text';

export default function TagView({ data, clickTagData, changeTagData }) {
  const clickTag = (index) => () => {
    const array = [];
    clickTagData.map((item, i) => {
      if (index === i) {
        array.push(item === 0 ? 1 : 0);
      } else {
        array.push(item === 1 ? 1 : 0);
      }
    });
    changeTagData(array);
  };

  return (
    <View style={styles.LikedCheck}>
      <View style={styles.TagView}>
        <FlatList
          columnWrapperStyle={{
            justifyContent: 'center',
            marginBottom: toSize(23),
          }}
          indicatorStyle={{ marginHorizontal: toSize(16) }}
          numColumns={3}
          data={data}
          keyExtractor={(item) => item.tagId.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} onPress={clickTag(index)}>
              <RKText
                size={13}
                weight={'600'}
                color={clickTagData[index] === 0 ? '#FFCC00' : '#FFF'}
                style={[
                  styles.Tag,
                  {
                    backgroundColor:
                      clickTagData[index] === 0 ? '#FFF6D3' : '#FFCC00',
                  },
                ]}
              >
                {'#' + item.engTagName}
              </RKText>
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Tag: {
    paddingHorizontal: toSize(10),
    paddingVertical: toSize(8),
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: toSize(8),
  },
});
