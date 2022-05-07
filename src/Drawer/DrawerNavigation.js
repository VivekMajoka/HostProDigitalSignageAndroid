import React, {useContext} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// drawer navigation
import {createDrawerNavigator} from '@react-navigation/drawer';

import {CustomDrawer} from './CustomDrawer';

import Layoutscreen from '../Layoutscreen';
import {Themecontext} from '../Theme/Themecontext';
import Theme from '../Theme/Theme';
import Login from '../Login';
const Drawer = createDrawerNavigator();

export default DrawerNavigation = ({navigation}) => {
  const theme = useContext(Themecontext)
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        component={Layoutscreen}
        name="Home"
        options={{
          title: 'HOME',
          headerShown: true,
          headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
          headerTitleStyle: {
            fontFamily: 'AdobeClean-Bold',
            fontSize: 22,
          },
        }}
      />
    </Drawer.Navigator>
  );
};
