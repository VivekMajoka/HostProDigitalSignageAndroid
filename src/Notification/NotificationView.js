import React, {useState, useEffect, useContext} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {Picker} from '@react-native-picker/picker';
import {Themecontext} from '../Theme/Themecontext';
import {FontContext} from '../FontSize/FontContext';
import Toast from 'react-native-simple-toast';
// import { styles } from '../Logintv.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const NotificationView = ({navigation, route}) => {
  const {id, update_id} = route.params;
  // alert(update_id);
  const theme = useContext(Themecontext);
  const fontsize = useContext(FontContext);

  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [status, setstatus] = useState('');
  useEffect(() => {
    getData();
    // putData(true);
  }, []);

  const getData = async () => {
    // const id = '1';
    const requestOptions = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    fetch(
      `http://196.29.238.100:8002/notifi/update_status/${id}`,
      requestOptions,
    )
      .then(res => res.json())
      .then(res => {
        // setdata(res);
        settitle(res.title);
        setdesc(res.description);
        setstatus(JSON.stringify(res.read_status));
        // alert(JSON.stringify(res.read_status));
        // alert(JSON.stringify(data[0]))
      });
  };

  const putData = async () => {
    // const id = '1';
    const formData = new FormData();
    formData.append('notification', 31);
    formData.append('read_status', 'True');
    const requestOptions = {
      method: 'PUT',
      // headers: {
      //   // 'content-type': 'application/json',
      //   Accept : 'application/json'
      // },
      body: formData
    };

    fetch(
      `http://196.29.238.100:8002/notifi/update_status/${id}/`,
      requestOptions,
    )
      .then(res => res.json())
      .then(res => {
        // alert(JSON.stringify(res));
        Toast.show("Notification read!", Toast.LONG);
      navigation.navigate('Notifications')
      })
      .catch(error => {
        alert(error);
      });
  };

  // const deleteData = async () => {
  //   // const id = '1';
  //   const formData = new FormData();
  //   formData.append('notification', 31);
  //   formData.append('read_status', 'True');
  //   const requestOptions = {
  //     method: 'DELETE',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   };

  //   fetch(
  //     `http://196.29.238.100:8002/notifi/update_status/${id}`,
  //     requestOptions,
  //   )
  //     .then(res => res.json())
  //     .then(res => {
  //       // setdata(res);
  //       // settitle(res.title);
  //       // setdesc(res.description);
  //       alert(JSON.stringify(res));
  //       // alert(JSON.stringify(data[0]))
  //     })
  //     .catch(error => {
  //       alert(error);
  //     });
  // };

  return (
    <View
      style={[
        {flex: 1, padding: 15},
        {backgroundColor: theme.backgroundColor},
      ]}>
      <View
        style={{
          backgroundColor: '#17baa1',
          // width: '100%',
          // height: '70%',
          flex: 0.6,
          elevation: 3,
          borderRadius: 20,
          padding: 20,
          // borderWidth: 2,
          // borderColor: 'grey',
          marginBottom: 5,
        }}>
        <View
          style={{
            // height: '20%',
            flex: 1,
            // borderColor: 'grey',
            // borderWidth: 1.5,
            marginBottom: 10,
          }}>
          <Text
            style={[{
              // fontSize: 26,
              fontWeight: '500',
              flexWrap: 'wrap',
              // maxHeight: '30%',
              borderColor: 'white',
              borderBottomWidth: 0.5,
              color: 'white',
              letterSpacing: 1.15,
            }, {fontSize: fontsize.fontSize}]}>
            {title}
          </Text>
        </View>
        <View
          style={{
            // height: '80%',
            flex: 4,
            // borderColor: 'grey',
            // borderWidth: 1.5,
          }}>
          <Text
            style={[{
              // fontSize: 22,
              fontWeight: '500',
              flexWrap: 'wrap',
              color: 'white',
              letterSpacing: 1.15,
              // maxHeight: '30%',
            }, {fontSize:fontsize.fontSize}]}>
            {desc}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.2,
          // borderWidth: 1,
          // borderColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={putData}
          style={{
            width: '40%',
            backgroundColor: '#17baa1',
            height: '30%',
            justifyContent: 'center',
            borderRadius: 40,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: 'white',
              letterSpacing: 1.15,
            }}>
            Mark as read!
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          activeOpacity={0.6}
          onPress={deleteData}
          style={{
            width: '40%',
            backgroundColor: 'rgba(210, 43, 43,0.9)',
            height: '30%',
            justifyContent: 'center',
            borderRadius: 40,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              borderRadius: 40,
              fontSize: 15,
              fontWeight: '600',
              letterSpacing: 1.15,
            }}>
            Delete
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
export default NotificationView;
