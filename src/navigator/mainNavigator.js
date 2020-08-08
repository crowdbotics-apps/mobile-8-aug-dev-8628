import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen09764Navigator from '../features/BlankScreen09764/navigator';
import BlankScreen09750Navigator from '../features/BlankScreen09750/navigator';
import BlankScreen09746Navigator from '../features/BlankScreen09746/navigator';
import BlankScreen09734Navigator from '../features/BlankScreen09734/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen09764: { screen: BlankScreen09764Navigator },
BlankScreen09750: { screen: BlankScreen09750Navigator },
BlankScreen09746: { screen: BlankScreen09746Navigator },
BlankScreen09734: { screen: BlankScreen09734Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
