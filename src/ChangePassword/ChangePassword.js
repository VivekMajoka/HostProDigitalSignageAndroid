import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Themecontext} from '../Theme/Themecontext';
import {FontContext} from '../FontSize/FontContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
// import { styles } from '../Logintv.style';

const ChangePassword = ({navigation}) => {
  const theme = useContext(Themecontext);
  const fontsize = useContext(FontContext);
  const [pass, setpass] = useState('');
  const [confPass, setconfPass] = useState('');

  const postData = async() => {
    const token = await AsyncStorage.getItem('token')
    requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token '+token,
      },
      body: JSON.stringify({
        password : pass,
        password2 : confPass
      })
    }
    await fetch('http://196.29.238.100:8002/auth/changepassword/', requestOptions)
    .then(res => res.json())
    .then((res)=>{
      Toast.show("Password changed successfully!", Toast.LONG);
      navigation.navigate('Layoutscreen')
    })
    .catch(error => alert(error))
    // alert('kllkl')
  };

  // const checkData = () => {
  //   alert(confPass)
  // }

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.tile}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text => {
            // text.persist();
            setpass(text);
          }}/>
      </View>
      <View style={styles.tile}>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm password"
          onChangeText={text => {
            // text.persist();
            setconfPass(text);
          }}/>
      </View>
      <TouchableOpacity style={[styles.button]} onPress={postData}>
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
    height: 40,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#17baa1',
    color: 'black',
    marginTop: 10,
    marginRight: 15,
    width: 120,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
