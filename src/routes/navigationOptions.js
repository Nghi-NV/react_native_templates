import { isX, paddingX, navigationBarHeight, statusBarHeight } from '../common/utils';

// The default height, on iOS this will always be 64 (44 + 20)
const defaultHeight = navigationBarHeight + statusBarHeight + (isX ? paddingX : 0);

export default (headerHeight = defaultHeight, marginTop = 0, extras = {}) => ({
  headerStyle: {
    backgroundColor: 'lighblue',
    height: headerHeight,
  },
  headerTitleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop,
  },
  ...extras,
});
