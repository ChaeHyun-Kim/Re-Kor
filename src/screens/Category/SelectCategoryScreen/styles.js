import { StyleSheet } from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  MainView: {
    flex: 1,
    backgroundColor: '#fff',
    width: responsiveScreenWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: toSize(4),
  },
  FilterView: {
    width: responsiveScreenWidth(90),
    marginBottom: toSize(13),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: { alignItems: 'flex-end', justifyContent: 'flex-end' },
  filterMenuView: {
    paddingHorizontal: toSize(12),
    paddingVertical: toSize(8),
    flexDirection: 'row',
    borderColor: '#E9E9E9',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  filterMenuText: {
    color: '#1F2024',
    fontSize: toSize(12),
    fontWeight: '400',
    paddingRight: toSize(12),
    paddingLeft: toSize(8),
  },
  listView: {
    backgroundColor: '#fff',
    paddingHorizontal: responsiveScreenWidth(5),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: toSize(100),
  },
});
