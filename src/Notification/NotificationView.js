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
    <View>
      <Text>Notification</Text>
    </View>
  );
};
export default NotificationView;
