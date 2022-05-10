import React, {useState, useContext} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {Themecontext} from '../Theme/Themecontext';
import {FontContext} from '../FontSize/FontContext';
// import { ActivityIndicator } from 'react-native-paper';
// import logo from '../../../assets/imgs/gibstat.png';

const {height, width} = Dimensions.get('window');

const Splashscreen = () => {
  const theme = useContext(Themecontext);
  const fontsize = useContext(FontContext);
  return (
    <View style={Style.main}>
      <StatusBar backgroundColor={theme.backgroundColor} />
      {/* Main Header */}
      <View style={[Style.header,{backgroundColor:theme.backgroundColor}]}>
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
