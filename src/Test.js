import React, {useState, useEffect, useContext} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './Logintv.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from './assests/logo.png';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import {Themecontext} from './Theme/Themecontext';

export default Test = ({navigation}) => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const theme = useContext(Themecontext);
  const postData = async () => {
    if (!email && !pass) {
      Toast.show('Please enter email/password', Toast.LONG);
    } else {
      fetch ('http://196.29.238.100:8002/auth/login/', {
        method : 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify({username: email,
          password: pass,})
        
      })
      .then(res=>res.json())
      .then(async(res)=>{
        // alert(JSON.stringify(res.token))
        if (res.token) {
          try {
            // console.log(res.data.token,"fgh")
            Toast.show('Login Successful!', Toast.LONG);
            await AsyncStorage.setItem('token', res.token);
            // await AsyncStorage.setItem('id', JSON.stringify(res.data.id))
            // let token=await AsyncStorage.getItem('id')
            // alert(token)
            return navigation.navigate('Layoutscreen');
          } catch (e) {
            // saving error
            console.log(e);
          }
        } else {
          Toast.show('Invalid Credentials!', Toast.LONG);
          console.log(res.errors);
        }
      })
      .catch(error=>alert(error))
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <Image source={logo} style={styles.logo} />
      </View>
      <KeyboardAvoidingView style={styles.formContainer}>
        <TextInput
          autoFocus={true}
          placeholder="Email/Username"
          placeholderTextColor="rgba(33,33,33,0.9)"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={val => setemail(val)}
          hasTvPrefferedFocus={true}
        />
        <TextInput
          // hasTvPrefferedFocus={true}
          textContentType="password"
          autoFocus={true}
          secureTextEntry={true}
          password={true}
          placeholder="Password"
          placeholderTextColor="rgba(33,33,33,0.9)"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={val => setpass(val)}
        />

        <TouchableOpacity
          style={styles.textInputBtn}
          onPress={postData}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
