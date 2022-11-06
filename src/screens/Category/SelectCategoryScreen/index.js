import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { toSize } from '../../../globalStyle';
import Category_Header from '../../../components/Category_Header';
import SimplePopupMenu from 'react-native-simple-popup-menu';
import PlaceForm from '../../../components/PlaceForm/PlaceForm';
import { categoryListAPI } from '../../../api/Category';

const SelectCategoryScreen = ({ route }) => {
  const { Category, cat } = route.params;
  const [data, getData] = useState([]);
  const [menu, handleMenu] = useState('Name');
  const [loading, setLoading] = useState(false);
  const [newloader, setNewloader] = useState(true);
  const [allpage, setAllpage] = useState(1);
  const [currentpage, setCurrentpage] = useState(0);
  const items = [
    { id: 'Name', label: 'Name' },
    { id: 'Likes', label: 'Likes' },
    { id: 'Rates', label: 'Rates' },
  ];

  useEffect(() => {
    handleList();
  }, [menu]);

  const handleList = async () => {
    categoryListAPI(cat, currentpage, menu)
      .then((response) => {
        if (response.data != null) {
          if (response.currentPage <= response.allPage - 1) {
            if (response.currentPage === 0) {
              getData(response.data);
            } else if (response.currentPage) {
              const newdata = data.concat(response.data);
              getData(newdata);
            }
            setCurrentpage(currentpage + 1);
            setLoading(true);
          } else {
            setNewloader(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onMenuPress = (id) => {
    setLoading(false);
    setCurrentpage(0);
    handleMenu(id);
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Category_Header title={Category} />
      <View style={styles.MainView}>
        {!loading && (
          <View style={styles.loadingView}>
            <Feather name="loader" size={toSize(30)} color="#5F5F5F" />
          </View>
        )}
        <ScrollView
          contentContainerStyle={styles.listView}
          nestedScrollEnabled={true}
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              handleList();
            }
          }}
        >
          {loading && (
            <View style={styles.FilterView}>
              <SimplePopupMenu
                items={items}
                style={styles.button}
                onSelect={(items) => {
                  onMenuPress(items.id);
                }}
                onCancel={() => console.log('onCancel')}
              >
                <View style={styles.filterMenuView}>
                  <WithLocalSvg asset={filter_arrow} />
                  <Text style={styles.filterMenuText}>{menu}</Text>
                  <SimpleLineIcons
                    name="arrow-down"
                    size={toSize(10)}
                    color="#C5C6CC"
                  />
                </View>
              </SimplePopupMenu>
            </View>
          )}
          {data.map((item, index) => {
            return (
              <PlaceForm
                data={item}
                place_name={item.title}
                region={item.address.addr1}
                heartScore={item.likeCount}
                starScore={item.rating}
                tagList={item.tagList}
                images={item.images}
                id={item.spotId.id}
                key={index}
              />
            );
          })}
          {newloader && (
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                paddingBottom: toSize(10),
              }}
            >
              <Feather name="loader" size={24} color="black" />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectCategoryScreen;
