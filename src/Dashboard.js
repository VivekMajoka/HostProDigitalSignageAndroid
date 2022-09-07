import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';
import logo from './assests/digiLogo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleSwitch from 'toggle-switch-react-native';
import {Picker} from '@react-native-picker/picker';
import { Themecontext } from './Theme/Themecontext';
import {FontContext} from './FontSize/FontContext';
// import { styles } from '../Logintv.style';

const Dashboard = ({navigation}) => {
  const theme = useContext(Themecontext);
  const fontsize = useContext(FontContext);


  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      // const userToken = await AsyncStorage.getItem('token');
      // console.log(userToken)
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
          <Image source={logo} style={styles.logo} />
       <TouchableOpacity
        style={[styles.tile]}
        onPress={() => navigation.navigate('Layoutscreen')}
        activeOpacity={0.5}>
        <Text style={[styles.text, {fontSize: fontsize.fontSize}]}>
          Start Campaign
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tile]}
        onPress={() => navigation.navigate('Settings')}
        activeOpacity={0.5}>
        <Text style={[styles.text, {fontSize: fontsize.fontSize}]}>
          Settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tile]}
        onPress={() => navigation.navigate('Notifications')}
        activeOpacity={0.5}>
        <Text style={[styles.text, {fontSize: fontsize.fontSize}]}>
         Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tile]}
        onPress={() => navigation.navigate('ContactUs')}
        activeOpacity={0.5}>
        <Text style={[styles.text, {fontSize: fontsize.fontSize}]}>
          Contact Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tile]}
        onPress={() => signOut()}
        activeOpacity={0.5}>
        <Text style={[styles.text, {fontSize: fontsize.fontSize}]}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    paddingTop: 30,
  },
  logo: {
    width: 200,
    height: 200,
    // borderRadius: 20,
    resizeMode: 'contain',
    backgroundColor: '#212121',
    paddingHorizontal: 10,
    alignSelf:"center"
    //  margin: 50,
    // borderColor:'#212121',
    // borderWidth:10
  },

  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#17baa1',
    margin: 10,
    height: 60,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  text: {
    letterSpacing: 1.15,
    color: 'black',
    fontSize: 14,
    // fontFamily: 'normal',
    fontWeight: '600',
    letterSpacing: 1.15,
  },

  heading: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontWeight: '700',
    fontSize: 28,
    letterSpacing: 1.15,
  },

  subHeading: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 1.15,
  },

  textInput: {
    // height: 45,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    letterSpacing: 1.15,
  },

  messageTile: {
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    height: '40%',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    flexWrap: 'wrap'
  },

  messageTextInput: {
    // alignSelf:'flex-start',
    // marginTop:60,
    height: 100,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
    // borderColor: 'black',
    // borderWidth: 1,
  },

  button: {
    // marginTop: 60,
    marginRight: 15,
    width: 120,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17baa1',
    alignSelf: 'flex-end',
  },
});
