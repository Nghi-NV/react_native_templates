import { StackNavigator } from 'react-navigation';
// import Routes from './routes';
import { IntroScreen } from './screens/Intro';
import navigationOptions from './routes/navigationOptions';

const Root = StackNavigator(
  {
    Intro: {
      screen: IntroScreen,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: navigationOptions(undefined, -10),
  },
);

export default Root;
