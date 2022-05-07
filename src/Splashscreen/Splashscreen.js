import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
// import { ActivityIndicator } from 'react-native-paper';
// import logo from '../../../assets/imgs/gibstat.png';

const {height, width} = Dimensions.get('window');

const Splashscreen = () => {
  return (
    <View style={Style.main}>
      <StatusBar backgroundColor="#fff" hidden={false} />
      {/* Main Header */}
      <View style={Style.header}>
        {/* <Image source={logo} style={Style.logo} /> */}
        <ActivityIndicator size={'large'} color="black" />
      </View>
    </View>
  );
};

export default Splashscreen;

const Style = StyleSheet.create({
  header: {
    // flex: 1,
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    resizeMode: 'contain',
    height: 150,
    marginBottom: 20,
  },
});
