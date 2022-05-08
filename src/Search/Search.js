import React, {useState, useEffect, useContext} from 'react';
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
import SearchBar from 'react-native-dynamic-search-bar';
import {Circle} from 'react-native-animated-spinkit';
import {Themecontext} from '../Theme/Themecontext';
import {EventRegister} from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import { styles } from '../Logintv.style';

const ChangePassword = ({navigation}) => {
  const theme = useContext(Themecontext);
  // const [theme, settheme] = useState(true);
  // alert(globalTheme)
  useEffect(() => {
    // getData();
    return () => {};
  }, []);

  // const getdata = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   // alert(token)
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: {
  //       // 'Content-Type': 'application/json',
  //       Accept : 'application/json',
  //       Authorization: token,
  //     },
  //   };
  //   await fetch('http://196.29.238.100/layout/campaign/list/', requestOptions)
  //     .then(res => res.json())
  //     .then(res => {
  //       alert(JSON.stringify(res))
  //     });
  //     // alert(JSON.stringify(res))
  // };

  const getData = async () => {
    // AsyncStorage get data
    // const id = await AsyncStorage.getItem('id');
    const token = await AsyncStorage.getItem('token');
    const requestOptions = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: token,
        id: 2,
      },
    };
    fetch(`http://196.29.238.100:8002/layout/campaign/list/`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res) {
          alert(JSON.stringify(res));
        }
      })
      .catch(error => alert(error));
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.tile}>
        <SearchBar
          fontColor="#c6c6c6"
          iconColor="#c6c6c6"
          //   spinnerVisibility={true}
          shadowColor="#282828"
          cancelIconColor="#c6c6c6"
          backgroundColor="#fff"
          placeholder="Search here"
          //   onChangeText={(text) => this.filterList(text)}
          onSearchPress={() => console.log('Search Icon is pressed')}
          //   onClearPress={() => this.filterList("")}
          onPress={() => alert('onPress')}
        />
      </View>
    </View>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    // paddingTop: 30,
  },

  tile: {
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    height: 50,
    borderRadius: 10,
    borderColor:'grey',
    borderWidth:1
    // padding: 5,
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
    //   borderColor:'grey',
    //   borderWidth:1
  },

  button: {
    marginTop: 10,
    marginRight: 15,
    width: 120,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
  },
});
