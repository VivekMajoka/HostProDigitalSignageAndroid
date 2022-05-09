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
// import { styles } from '../Logintv.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const Notifications = ({navigation}) => {
  const theme = useContext(Themecontext);
  const fontsize = useContext(FontContext);
  const isFocused = useIsFocused();

  // const data = [{channel_number: 1}, {channel_number: 2}, {channel_number: 3}];
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    // const id = '31';
    const id = await AsyncStorage.getItem('id');
    const requestOptions = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    fetch(`http://196.29.238.100:8002/notifi/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        setdata(res);
        // alert(JSON.stringify(res));
        // alert(JSON.stringify(data[0]))
      });
  };

  return (
    <ScrollView style={{width: '100%', height: '80%', elevation: 5}}>
      {data
        ? data.map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={()=> {navigation.navigate('NotificationView',{id : item.id, update_id: item.notification.id})}}
                key={item.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#17baa1',
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  height: 100,
                  elevation: 3,
                  borderRadius: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  {/* <View
                    style={{
                      marginHorizontal: 5,
                      // borderColor: 'black',
                      // borderWidth: 1,
                      height: '90%',
                      width: '10%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white'}}>{item.notification.id}</Text>
                  </View> */}
                  <View
                    style={{
                      marginHorizontal: 5,
                      // borderColor: 'black',
                      // borderWidth: 1,
                      height: '90%',
                      width: '23%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: item.channel_image}}
                      resizeMode={'contain'}
                      style={{
                        height: 70,
                        width: 80,
                        // borderColor: 'black',
                        // borderWidth: 1,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginHorizontal: 5,
                      height: '90%',
                      width: '77%',
                      // borderColor: 'black',
                      // borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '40%',
                        flexWrap: 'wrap',
                        // borderColor: 'black',
                        // borderWidth: 1,
                      }}>
                      <Text style={[{color: 'white'}, {fontSize: fontsize.fontSize}]}>
                        {item.notification.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '60%',
                        flexWrap: 'wrap',
                        // borderColor: 'black',
                        // borderWidth: 1,
                      }}>
                      <Text style={[{color: 'white'}, {fontSize: fontsize.fontSize}]}>
                        {item.notification.text_content}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        : null}
    </ScrollView>
  );
};
export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    paddingTop: 30,
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
  },

  picker: {
    backgroundColor: '#fff',
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    color: 'black',
  },
});
