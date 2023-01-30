import { StyleSheet } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: 'center',
    flex: 1,
  },
  container: {
    width: responsiveScreenWidth(100) - toSize(48),
    flex: 1,
  },
  FirstView: {
    width: '80%',
    justifyContent: 'space-between',
    marginTop: toSize(24),
  },
  BottomTextView: {
    marginLeft: toSize(12),
  },
  buttonView: {
    marginVertical: toSize(24),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  BottomView: {
    width: '100%',
    height: toSize(48),
    marginVertical: toSize(24),
    borderRadius: 12,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  BottomButtonText: {
    fontSize: toSize(16),
    fontWeight: '600',
  },

  LikedView: {
    marginTop: toSize(29),
  },
  LikedMainText: {
    fontWeight: '700',
    fontSize: toSize(14),
  },
});
