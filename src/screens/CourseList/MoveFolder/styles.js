import { StyleSheet } from 'react-native';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MainView: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: toSize(80),
    paddingHorizontal: toSize(22),
    paddingTop: toSize(22),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: '700',
    color: 'black',
  },
  BottomView: {
    backgroundColor: '#fff',
    width: '90%',
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
});
