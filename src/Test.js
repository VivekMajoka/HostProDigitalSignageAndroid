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
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Test = ({navigation}) => {
  const [pass, setpass] = useState('')
  const checkData = () => {
    // alert(pass)
  }

  useEffect(() => {
    getData();
  }, [])
  
  // const getData = async() => {
  //   const token = await AsyncStorage.getItem('token')
  //   const id = 1
  //   // alert(token)
  //   const requestOptions = {
  //     method : 'GET',
  //     header : {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       // Authorization : 'Token '+token,
  //     },
  //   }
    
  //   fetch(`http://196.29.238.100:8002/notifi/1`, requestOptions)
  //   .then(res => res.json)
  //   .then(res => {
  //     alert(JSON.stringify(res))
  //   })
  // }
  const getData = async () => {
    // AsyncStorage get data
    // const token = await AsyncStorage.getItem('token');
    const requestOptions = {
      method: 'GET',
      headers: {
        // 'content-type': 'application/json',
        // Accept: 'application/json',
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0ODUsInVzZXJuYW1lIjoiYWJjZEAyIiwiZXhwIjoxNjUxODIwMDY1LCJlbWFpbCI6ImFiY2QxQGdtLmNvbSJ9.yvpVPfrJhytDsXie4b3Xvh78uqvjUvEM2uh5G6aD6j0',
      },
    };
    await fetch(`http://18.216.87.97/bnb/hotel/detail/`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res) {
          // setdata(res);
          alert(res)
        }
      })
      .catch(error => alert(error));
  };

  return(
    <View>
      <TextInput style={{borderWidth:1, borderColor:'black'}} onChangeText={(text) => {setpass(text)}}/>
      <TouchableOpacity style={{padding: 20, backgroundColor:'red'}} onPress={getData}><Text>SUBMIT</Text></TouchableOpacity>
    </View>
  )
}