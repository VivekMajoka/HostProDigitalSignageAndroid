import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {Picker} from '@react-native-picker/picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Themecontext} from '../Theme/Themecontext';
import {FontContext} from '../FontSize/FontContext';
// import { styles } from '../Logintv.style';

const ChangePassword = ({navigation}) => {
  const theme = useContext(Themecontext);
  const fontsize = useContext(FontContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={[styles.messageTile, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.heading, {color:theme.color}]}>Host Pro </Text>
        {/* <Text style={[styles.subHeading, {color:theme.color}]}>LEANVIA s.r.o. </Text> */}
        <Text style={[styles.textInput, {color:theme.color}]}>12 Roman Ridge Street,</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>Roman Ridge,</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>Accra, Ghana,</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>Phone: 0243535183</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>Email: info@hostpro.com</Text>
        {/* <Text style={[styles.textInput, {color:theme.color}]}>Skype: leanvia.com</Text> */}
      </View>
      {/* <View style={[styles.messageTile, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.heading, {color:theme.color}]}>LEANVIA Asia</Text>
        <Text style={[styles.subHeading, {color:theme.color}]}>M/S. LEANVIA</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>776, IA-2</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>Chandigarh 160002</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>India</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>Phone:  +91 172 404 4311</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>Email: info@leanvia.com</Text>
        <Text style={[styles.textInput, {color:theme.color}]}>Skype: leanvia.com</Text>
      </View> */}
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>SUBMIT</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    paddingTop: 30,
  },

  tile: {
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    height: 50,
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
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
