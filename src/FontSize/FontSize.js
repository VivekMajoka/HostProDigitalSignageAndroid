import {StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FontSize = StyleSheet.create({
    small: {
      fontSize: 14
    },

    large: {
      fontSize: 20
    },
});

export default FontSize;