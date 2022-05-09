import React, {useState, useEffect, useContext} from 'react';

import {View, StyleSheet} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  //   Caption,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Themecontext} from '../Theme/Themecontext';
import {FontContext} from '../FontSize/FontContext';

// import Stylecustomdrawer from '../../style/Stylecustomdrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../context';

function CustomDrawer(props) {
  const theme = useContext(Themecontext);
  const fscontext = useContext(FontContext);

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      // const userToken = await AsyncStorage.getItem('token');
      // console.log(userToken)
      props.navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };

  //   const { signOut } = React.useContext(AuthContext);

  return (
    <View
      style={[
        Stylecustomdrawer.mainContainer,
        {backgroundColor: theme.backgroundColor},
      ]}>
      <DrawerContentScrollView {...props}>
        <View style={[Stylecustomdrawer.drawerContent]}>
          <Drawer.Section style={{marginBottom: 10}}>
            {/* <DrawerItem
              icon={({color, size}) => (
                <FontAwesome
                  name="home"
                  size={size}
                  color={'white'}
                  style={{width: 30}}
                />
              )}
              label="HOME"
              style={{paddingLeft: 10, alignSelf: 'stretch'}}
              labelStyle={[Stylecustomdrawer.drawerItemText, {color: theme.color}]}
              onPress={() => props.navigation.navigate('Home')}
            /> */}

            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome
                  name="search"
                  size={size}
                  color={theme.color}
                  style={{width: 30}}
                />
              )}
              label="SEARCH"
              style={{paddingLeft: 10, alignSelf: 'stretch'}}
              labelStyle={[
                Stylecustomdrawer.drawerItemText,
                {color: theme.color, fontSize: fscontext.fontSize},
              ]}
              onPress={() => props.navigation.navigate('Search')}
            />

            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome
                  name="cog"
                  size={size}
                  color={theme.color}
                  style={{width: 30}}
                />
              )}
              label="SETTINGS"
              style={{paddingLeft: 10}}
              labelStyle={[
                Stylecustomdrawer.drawerItemText,
                {color: theme.color, fontSize: fscontext.fontSize},
              ]}
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome
                  name="bell"
                  size={size}
                  color={theme.color}
                  style={{width: 30}}
                />
              )}
              label="NOTIFICATIONS"
              style={{paddingLeft: 10}}
              labelStyle={[
                Stylecustomdrawer.drawerItemText,
                {color: theme.color, fontSize: fscontext.fontSize},
              ]}
              onPress={() => {
                props.navigation.navigate('Notifications');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome
                  name="phone"
                  size={size}
                  color={theme.color}
                  style={{width: 28}}
                />
              )}
              style={{color: theme.color, paddingLeft: 10}}
              label="CONTACT US"
              labelStyle={[
                Stylecustomdrawer.drawerItemText,
                {color: theme.color, fontSize: fscontext.fontSize},
              ]}
              onPress={() => {
                props.navigation.navigate('ContactUs');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <FontAwesome
                  name="phone"
                  size={size}
                  color={theme.color}
                  style={{width: 28}}
                />
              )}
              style={{color: theme.color, paddingLeft: 10}}
              label="TEST"
              labelStyle={[
                Stylecustomdrawer.drawerItemText,
                {color: theme.color, fontSize: fscontext.fontSize},
              ]}
              onPress={() => {
                props.navigation.navigate('Test');
              }}
            /> */}

            {/* <DrawerItem
              icon={({color, size}) => (
                <FontAwesome
                  name="info-circle"
                  size={size}
                  color={theme.color}
                  style={{width: 28, borderRadius: 10}}
                />
              )}
              style={{paddingLeft: 10, alignSelf: 'stretch'}}
              label="ABOUT"
              labelStyle={[Stylecustomdrawer.drawerItemText, {color: theme.color, fontSize: fscontext.fontSize}]}
              // onPress={() => {
              //   props.navigation.navigate('Test');
              // }}
            /> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section
        style={[
          Stylecustomdrawer.bottomDrawerSection,
          {borderTopColor: theme.color, borderBottomColor: theme.color},
        ]}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialIcons
            name="logout"
            size={size}
            color={theme.color}
            style={{width: 28}}
          />
          
          )}
          label="Sign Out"
          labelStyle={[
            Stylecustomdrawer.drawerItemText,
            {color: theme.color, fontSize: fscontext.fontSize},
          ]}
          onPress={signOut}
        />
      </Drawer.Section>
    </View>
  );
}

export {CustomDrawer};

const Stylecustomdrawer = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.84)',
    // backgroundColor: 'white'
    // borderWidth: 1,
    // borderColor:'white',+
  },

  drawerContent: {
    opacity: 0.8,
    flex: 1,
    paddingBottom: 50,
    paddingTop: 50,
  },

  drawerItemText: {
    color: '#fff',
    fontFamily: 'AdobeClean-Bold',
    fontSize: 16,
    letterSpacing: 1.15,
    justifyContent: 'center',
    alignContent: 'space-between',
    borderRadius: 20,
  },

  bottomDrawerSection: {
    opacity: 0.8,
    marginBottom: 10,
    borderTopColor: '#fff',
    borderTopWidth: 0.4,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.4,
    borderRadius: 10,
  },
});
