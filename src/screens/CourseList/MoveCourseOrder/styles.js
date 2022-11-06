import { StyleSheet } from 'react-native';
import { toSize } from '../../../globalStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ListView: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: toSize(25),
    height: toSize(52),
    paddingHorizontal: toSize(16),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  MainView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: toSize(22),
    paddingTop: toSize(22),
  },
  mainText: {
    fontSize: toSize(14),
    color: '#1F2024',
    fontWeight: '400',
    marginLeft: toSize(18),
    marginRight: toSize(8),
  },
  numText: {
    fontSize: toSize(14),
    color: '#000',
    fontWeight: '700',
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

  textView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  BottomButtonText: {
    fontSize: toSize(16),
    fontWeight: '600',
  },
});
