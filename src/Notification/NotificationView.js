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

const NotificationView = ({navigation}) => {
  const theme = useContext(Themecontext);
  const fontsize = useContext(FontContext);
  return (
    <View style={[{flex: 1, padding: 15},{backgroundColor: theme.backgroundColor}]}>
      <View
        style={{
          backgroundColor: '#17baa1',
          // width: '100%',
          // height: '70%',
          flex: 0.7,
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
            style={{
              fontSize: 30,
              fontWeight: '800',
              flexWrap: 'wrap',
              // maxHeight: '30%',
              borderColor: 'white',
              borderBottomWidth: 0.5,
              color:'white',
              letterSpacing: 1.15,
            }}>
            Notification
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
            style={{
              fontSize: 30,
              fontWeight: '800',
              flexWrap: 'wrap',
              color:'white',
              letterSpacing: 1.15,
              // maxHeight: '30%',
            }}>
            Desc
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
              color:'white',
              letterSpacing: 1.15,
            }}>
            Mark as unread!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
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
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NotificationView;
