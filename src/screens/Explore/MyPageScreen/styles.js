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
    backgroundColor: '#ffffff',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  userInfo: {
    marginTop: toSize(11),
    height: toSize(321),
    justifyContent: 'flex-end',
    width: toSize(327),
    position: 'relative',
    marginBottom: toSize(20),
  },
  userView: {
    height: toSize(281),
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    padding: toSize(18),
  },
  picture: {
    position: 'absolute',
    resizeMode: 'cover',
    top: 0,
    left: toSize(327) / 2 - toSize(100) / 2,
    width: toSize(100),
    height: toSize(100),
    borderRadius: 50,
    zIndex: 100,
    backgroundColor: 'white',
  },
  Nickname: {
    marginTop: toSize(25),
    fontWeight: '700',
    fontSize: toSize(15),
    color: '#2F3036',
    textAlign: 'center',
  },
  iconView: {
    width: '100%',
    alignItems: 'flex-end',
  },
  settingView: {
    width: '100%',
  },
  lineView: {
    backgroundColor: '#F3F3F3',
    width: '100%',
    height: toSize(30),
  },
  tagView: {
    flexDirection: 'row',
    marginVertical: toSize(20),
  },
  wishView: {
    flexDirection: 'row',
    marginTop: toSize(6),
    marginBottom: toSize(11),
  },
  lineBackView: {
    position: 'absolute',
    left: '50%',
    marginLeft: -responsiveScreenWidth(55),
    width: responsiveScreenWidth(110),
    zIndex: -100,
    bottom: toSize(200),
  },
  WishTitle: {
    fontWeight: '700',
    fontSize: toSize(14),
    color: '#5F5F5F',
  },
  imageStyle: {
    height: toSize(75),
    width: toSize(75),
    borderRadius: 10,
    marginRight: toSize(10),
  },
});
