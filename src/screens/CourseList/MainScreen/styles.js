import { StyleSheet } from 'react-native';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MainView: {
    backgroundColor: '#fff',
    paddingHorizontal: toSize(22),
    paddingTop: toSize(22),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: '700',
    color: 'black',
  },
});
