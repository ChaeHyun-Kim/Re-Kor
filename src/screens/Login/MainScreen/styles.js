import { StyleSheet } from 'react-native';
import { toSize } from '../../../globalStyle';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    resizeMode: 'contain',
  },
  loginView: {
    marginTop: toSize(45),
    paddingHorizontal: toSize(24),
    width: '100%',
  },
  textInput: {
    fontSize: toSize(14),
    fontWeight: '400',
    width: '100%',
  },
});
