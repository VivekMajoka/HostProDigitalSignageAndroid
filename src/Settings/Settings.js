import React, {useState, useContext, useEffect} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Appearance,
  Switch,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {Picker} from '@react-native-picker/picker';
// import { styles } from '../Logintv.style';
import {Themecontext} from '../Theme/Themecontext';
import {FontContext} from '../FontSize/FontContext';
import {EventRegister} from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({navigation}) => {
  // const [selectedLanguage, setSelectedLanguage] = useState();
  const [mode, setmode] = useState();
  const [font, setfont] = useState('');

  const storeFont = async fontsize => {
    await AsyncStorage.setItem('font', fontsize);
    // const fs = await AsyncStorage.getItem('font')
    // console.log(fs)
  };

  const storeTheme = async theme => {
    await AsyncStorage.setItem('theme', theme);
    // const t = await AsyncStorage.getItem('theme')
    // console.log(t)
  };

  const getData =  async() => {
    const fs = await AsyncStorage.getItem('font')
    if (fs != null) {
      setfont(fs)
    }
    const t = await AsyncStorage.getItem('theme')
    if (t != null) {
      setmode(t)
    }
  }

  useEffect(() => {
    getData();
  }, [])
  


  const theme = useContext(Themecontext);
  const fontsize = useContext(FontContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.tile}>
        <View>
          <Text style={[styles.text, {fontSize: fontsize.fontSize}]}>
            THEME
          </Text>
        </View>
        <View>
          {/* <ToggleSwitch
            isOn={mode}
            onColor="black"
            offColor="white"
            //   label="THEME"
            //   labelStyle={{color: 'white', fontWeight: '600', fontSize:15}}
            size="large"
            onToggle={(value) => {
              setmode(!mode);
              storeTheme(JSON.stringify(mode));
              EventRegister.emit('changeTheme', mode)
            }}
            animationSpeed={20}
            circleColor={'#17baa1'}
          /> */}

          {/* <Switch
            value={mode}
            trackColor={{false: 'white', true: 'black'}}
            onValueChange={value => {
              setmode(value);
              storeTheme(JSON.stringify(value));
              EventRegister.emit('changeTheme', value);
            }}
            // onValueChange={value => {
            //   setmode(value);
            //   storeMode(value);
            //   EventRegister.emit('changeTheme', value);
            // }}
            thumbColor={'grey'}
          /> */}

          <View style={styles.picker}>
            <Picker
              selectedValue={mode}
              onValueChange={value => {
                setmode(value);
                storeTheme(value);
                EventRegister.emit('changeTheme', value);
              }}
              mode="dropdown">
              {/* <Picker.Item label="Choose One" value="" color="black" /> */}
              <Picker.Item label="Light" value="false" color="black" />
              <Picker.Item label="Dark" value="true" color="black" />
            </Picker>
          </View>

        </View>
      </View>
      <View style={styles.tile}>
        <View>
          <Text style={[styles.text, {fontSize: fontsize.fontSize}]}>
            FONT SIZE
          </Text>
        </View>
        <View style={styles.picker}>
          <Picker
            selectedValue={font}
            onValueChange={value => {
              setfont(value);
              storeFont(value);
              EventRegister.emit('changeFontSize', value);
            }}
            mode="dropdown">
            {/* <Picker.Item label="Choose One" value="" color="black" /> */}
            <Picker.Item label="Small" value="small" color="black" />
            <Picker.Item label="Large" value="large" color="black" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.tile]}
        onPress={() => navigation.navigate('ChangePassword')}
        activeOpacity={0.5}>
        <Text style={[styles.text, {fontSize: fontsize.fontSize}]}>
          CHANGE PASSWORD
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Settings;

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
