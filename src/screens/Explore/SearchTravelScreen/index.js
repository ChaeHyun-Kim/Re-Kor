import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView } from 'react-native';
import ic_loading from '../../../icons/ic_loading.svg';
import { WithLocalSvg } from 'react-native-svg';
import SearchView from '../../../components/SearchView';
import PlaceForm from '../../../components/PlaceForm/PlaceForm';
import { searchPlaceAPI } from '../../../api/Explore';
import { styles } from './styles';

const SearchTravelScreen = () => {
  const [search, setChangeSearch] = useState('');
  const [showPlace, handelShowPlace] = useState(true);
  const [searchArray, setSearchArray] = useState([]);
  const [searchData, getSearchData] = useState([]);

  const handelSearchPlace = () => {
    if (search !== '') {
      const newData = {
        content: search,
      };
      setSearchArray([newData, ...searchArray]);

      searchPlaceAPI(search)
        .then((response) => {
          if (response != null) {
            getSearchData(response);
            handelShowPlace(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      handelShowPlace(true);
    }
  };
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.rowView}>
          <SearchView
            search={search}
            placeholder={'Search for tags or travel destinations'}
            setChangeSearch={setChangeSearch}
            rightIcon={'arrowleft'}
            onclick={handelSearchPlace}
          />
        </View>
        {showPlace ? (
          <View style={styles.RecentSearchView}>
            {/* <Text style={styles.recentMainText}>Recent Search</Text>
            {searchArray.map((array, key) => (
              <RecentView content={array.content} key={key} />
            ))} */}
            <Text style={styles.recentMainText}>Please search</Text>
            <WithLocalSvg asset={ic_loading} />
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.MainView}
            style={styles.ScrollView}
          >
            {searchData.map((item, index) => {
              return (
                <PlaceForm
                  data={item}
                  place_name={item.title}
                  region={item.address.addr1}
                  category={item.rekorCategory}
                  heartScore={item.likeCount}
                  starScore={item.rating}
                  tagList={item.tagList}
                  images={item.images}
                  key={index}
                  // onClickMenu={onClickMenu}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
export default SearchTravelScreen;
