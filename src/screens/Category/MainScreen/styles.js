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
    flexGrow: 1,
    backgroundColor: '#fff',
    width: responsiveScreenWidth(90),
    justifyContent: 'space-between',
    marginVertical: toSize(9),
  },
  MainText: {
    fontSize: toSize(20),
    fontWeight: '700',
    color: '#1F2024',
  },
  SubText: {
    fontSize: toSize(14),
    fontWeight: '400',
    color: '#71727A',
    marginBottom: toSize(27),
  },
  ButtonView: { flex: 1, marginHorizontal: toSize(9) },
  HorizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: toSize(18),
  },
  CategoryView: {
    width: toSize(140),
    height: toSize(120),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#F8F8F8',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },

  Category_text: {
    paddingTop: toSize(6),
    fontSize: toSize(12),
    fontWeight: '400',
    color: '#6C6C6C',
  },
});
