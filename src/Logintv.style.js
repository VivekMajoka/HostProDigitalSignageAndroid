import {StyleSheet, Dimensions} from 'react-native';
import { Themecontext } from './Theme/Themecontext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%"
  },
  formContainer: {
    flex: 1,
  },

  logoContainer: {
    // flex: 1,
    // borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor:'#212121',
    // borderWidth:1
  },

  logo: {
    width: 200,
    height: 200,
    // borderRadius: 20,
    resizeMode: 'contain',
    backgroundColor: '#212121',
    paddingHorizontal: 10,
    //  margin: 50,
    // borderColor:'#212121',
    // borderWidth:10
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    opacity: 1,
    width: 363,
    height: 52,
    textAlign: 'left',
    paddingLeft: 28,
    fontSize: width > 600 ? 20 : 14,
    marginBottom: 16,
    color: 'black',
    borderColor: '#212121',
    borderWidth: 1,
  },
  textInputBtn: {
    borderRadius: 8,
    opacity: 1,
    width: 363,
    height: 52,
    backgroundColor: '#17baa1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  btnText: {
    // fontSize: width > 600 ? 20 : 18,
    color: 'white',
  },
  linkText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: width > 600 ? 20 : 16,
    marginBottom: 16,
  },
  linkText2: {
    textAlign: 'center',
    color: '#rgb(23,186,161)',
    fontSize: width > 600 ? 20 : 16,
  },
});

export {styles};
