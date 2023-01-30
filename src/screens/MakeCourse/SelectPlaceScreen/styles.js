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
    marginVertical: toSize(4),
  },
  listView: {
    backgroundColor: '#fff',
    paddingHorizontal: toSize(24),
    marginTop: toSize(9),
    width: '100%',
    paddingBottom: toSize(30),
  },
});
