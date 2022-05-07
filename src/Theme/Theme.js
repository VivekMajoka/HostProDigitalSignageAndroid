import {StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Theme = StyleSheet.create({
    light:{
      theme: 'light',
      backgroundColor: '#fff',
      color: '#212121',
    },

    dark:{
      theme: 'dark',
      backgroundColor: '#212121',
      color: '#fff',
    },
});

export default Theme;