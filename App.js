/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState, useEffect, useContext} from 'react';
import Login from './src/Login';
import Loginpassword from './src/Loginpassword';
import ContactUs from './src/ContactUs/ContactUs'

import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Layoutscreen from './src/Layoutscreen';
import DrawerNavigation from './src/Drawer/DrawerNavigation';
import Settings from './src/Settings/Settings';
import ChangePassword from './src/ChangePassword/ChangePassword';
import Search from './src/Search/Search';
import {EventRegister} from 'react-native-event-listeners';
import {Themecontext} from './src/Theme/Themecontext';
import Theme from './src/Theme/Theme';
import { FontContext } from './src/FontSize/FontContext';
import fontSize from './src/FontSize/FontSize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notifications from './src/Notification/Notifications'
import NotificationView from './src/Notification/NotificationView';
import Test from './src/Test';

const Stack = createNativeStackNavigator();

const App = () => {
  const [mode, setmode] = useState();
  const [font, setfont] = useState('');
  const theme = useContext(Themecontext);
  const fscontext  = useContext(FontContext)

  const getVals = async () => {
    const prevTheme = await AsyncStorage.getItem('theme')
    setmode(prevTheme)
    console.log(prevTheme)
    const prevFont = await AsyncStorage.getItem('font')
    setfont(prevFont)
    console.log(prevFont)
  }

  useEffect(() => {
    getVals();
    let eventListener = EventRegister.addEventListener('changeTheme', data => {
      setmode(data);
      // alert(data)
    });
    let fonteventListener = EventRegister.addEventListener('changeFontSize', val => {
      setfont(val);
      // console.log(val)
    });
    // console.log(mode)
    return () => {
      EventRegister.removeEventListener(eventListener);
      EventRegister.removeEventListener(fonteventListener);
    };
  }, []);

  return (
    <FontContext.Provider value={font === 'large' ? fontSize.large : fontSize.small}>
    <Themecontext.Provider value={mode == 'true' ? Theme.dark : Theme.light}>
      <NavigationContainer theme={ mode == 'true' ? DarkTheme : DefaultTheme } >
        <Stack.Navigator>
        {/* <Stack.Screen
            name="Test"
            component={Test}
            options={{
              title: 'Test',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          /> */}
          
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: fscontext.fontSize,
              },
            }}
          />

          <Stack.Screen
            name="Loginpassword"
            component={Loginpassword}
            options={{
              title: 'PASSWORD',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          />

          <Stack.Screen
            name="Layoutscreen"
            component={DrawerNavigation}
            options={{
              title: 'HOME',
              headerShown: false,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: 'SETTINGS',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: fscontext.fontSize,
              },
            }}
          />

          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              title: 'NOTIFICATIONS',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          />

          <Stack.Screen
            name="NotificationView"
            component={NotificationView}
            options={{
              title: 'VIEW NOTIFICATION',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          />

          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
              title: 'CHANGE PASSWORD',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          />

          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              title: 'SEARCH',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          />

          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              title: 'CONTACT US',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          />

          <Stack.Screen
            name="Test"
            component={Test}
            options={{
              title: 'Test',
              headerShown: true,
              headerStyle: {backgroundColor: theme.backgroundColor},
              headerTintColor: theme.color,
              headerTitleStyle: {
                fontFamily: 'AdobeClean-Bold',
                fontSize: 22,
              },
            }}
          />
          
          {/*  <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Themecontext.Provider>
    </FontContext.Provider>
  );
};

export default App;
