import { StyleSheet } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: 'center',
    flex: 1,
  },
  map: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
  },
  container: {
    position: 'absolute',
    width: '90%',
    marginTop: toSize(44),
    flex: 1,
  },
  MainView: {
    flex: 1,
    marginHorizontal: toSize(24),
    marginVertical: toSize(22),
  },
  rowView: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  backText: {
    fontWeight: '400',
    fontSize: toSize(13),
    color: '#000',
  },
});
