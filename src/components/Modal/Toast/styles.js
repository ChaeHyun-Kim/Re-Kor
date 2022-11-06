import { StyleSheet } from 'react-native';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    left: toSize(48),
    right: toSize(48),
    height: toSize(71),
    padding: toSize(16),
    borderRadius: 16,
    zIndex: 100,
    justifyContent: 'center',
  },
  WaitToastContainer: {
    backgroundColor: '#FFE2E5',
    position: 'absolute',
    left: toSize(48),
    right: toSize(48),
    height: toSize(71),
    padding: toSize(16),
    borderRadius: 16,
    zIndex: 100,
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    paddingLeft: toSize(16),
  },
});
