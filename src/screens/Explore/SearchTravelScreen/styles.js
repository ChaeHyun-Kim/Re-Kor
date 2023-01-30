import { StyleSheet } from 'react-native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    width: '90%',
    marginTop: toSize(50),
  },
  RecentSearchView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: toSize(200),
  },
  recentMainText: {
    fontWeight: '600',
    fontSize: toSize(12),
    color: '#5F5F5F',
    paddingVertical: toSize(7),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainView: {
    flexGrow: 1,
  },
  ScrollView: {
    height: toSize(650),
    marginVertical: toSize(30),
  },
});
