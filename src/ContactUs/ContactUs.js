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
      <View style={styles.tile}>
        <TextInput
          style={styles.textInput}
          placeholder={'Contact Number'}
          blurOnSubmit={true}></TextInput>
      </View>
      <View style={styles.tile}>
        <TextInput
          style={styles.textInput}
          placeholder={'Email'}></TextInput>
      </View>
      <View style={styles.messageTile}>
        <TextInput
        multiline={true}
          style={[styles.messageTextInput] }
          numberOfLines={4}
          placeholder={'Message'}></TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>SUBMIT</Text>
      </TouchableOpacity>
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
    marginBottom:10,
    borderColor: 'black',
    borderWidth: 1,
  },

  text: {
    letterSpacing: 1.15,
    color: 'black',
    fontSize: 14,
    // fontFamily: 'normal',
    fontWeight: '600',
  },

  textInput: {
    height: 45,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  messageTile: {
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    height: 100,
    borderRadius: 10,
    padding: 5,
    marginBottom:10,
    borderColor: 'black',
    borderWidth: 1,
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
