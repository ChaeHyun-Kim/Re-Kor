import { StyleSheet } from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: responsiveScreenWidth(100),
  },
  MainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: responsiveScreenWidth(100),
  },
  row_view: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommend_view: {
    width: '100%',
    paddingHorizontal: toSize(24),
    marginTop: toSize(15),
  },
  recommend_title: {
    fontWeight: '700',
    fontSize: toSize(20),
    color: '#2F3036',
  },
  place_view: {
    marginTop: toSize(3),
    alignItems: 'center',
  },
  fullView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: toSize(20),
    paddingVertical: toSize(30),
  },
  backView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  picture: {
    width: toSize(328),
    height: toSize(328),
    borderRadius: toSize(20),
    position: 'relative',
    paddingTop: toSize(14),
    justifyContent: 'space-between',
  },
  HeartShow: {
    position: 'absolute',
    top: (toSize(290) - toSize(95)) / 2,
    left: (toSize(328) - toSize(95)) / 2,
  },
  region_text: {
    fontWeight: '400',
    fontSize: toSize(14),
    color: 'white',
  },
  place_text: {
    fontWeight: '700',
    fontSize: toSize(20),
    color: 'white',
    paddingBottom: toSize(7),
  },
  sub_text: {
    fontWeight: '700',
    fontSize: toSize(12),
    color: 'white',
    marginLeft: toSize(5),
    marginRight: toSize(6),
  },
  left: {
    alignItems: 'flex-end',
    paddingRight: toSize(20),
  },
  place_information: {
    justifyContent: 'flex-end',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagView: {
    flexDirection: 'row',
    width: '100%',
    marginTop: toSize(7),
    maxHeight: toSize(40),
  },
  line: {
    width: toSize(1),
    height: toSize(13),
    backgroundColor: '#fff',
    marginHorizontal: toSize(8),
  },
});
