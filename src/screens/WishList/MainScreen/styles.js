import { StyleSheet } from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: responsiveScreenWidth(100),
    alignItems: 'center',
  },
  MainView: {
    backgroundColor: '#fff',
    width: responsiveScreenWidth(90),
    justifyContent: 'space-between',
    marginVertical: toSize(9),
    paddingBottom: toSize(30),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: '700',
    color: 'black',
  },
});
