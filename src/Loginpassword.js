import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import {styles} from './Logintv.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from './assests/logo.png';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import {Themecontext} from './Theme/Themecontext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Loginpassword extends Component {
  static contextType = Themecontext;
  state = {
    email: '',
    password: '',
    // email:'',
    // password:''
  };
  fieldRef = React.createRef();

  componentDidMount() {
    const {email} = this.props.route.params;
    this.setState({email});
    // console.log(email, "hiii")
  }

  formatText = text => {
    return text.replace(/[^+\d]/g, '');
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  onPressLogin = async () => {
    // console.log(this.state.password, this.state.email)
    if (!this.state.password) {
      alert('please enter password');
      Toast.show('Please enter password', Toast.LONG);
    } else {
      let res = await axios.post('http://196.29.238.100:8002/auth/login/', {
        username: this.state.email,
        password: this.state.password,
      });

      // alert(JSON.stringify(res.data));
      if (res.data.token) {
        try {
          // console.log(res.data.token,"fgh")
          Toast.show('Login Successful!', Toast.LONG);
          await AsyncStorage.setItem('token', res.data.token);
          await AsyncStorage.setItem('id', JSON.stringify(res.data.id));
          // await AsyncStorage.setItem('id', JSON.stringify(res.data.id))
          let token = await AsyncStorage.getItem('id');
          // alert(token)
          // this.setState({password: ''})
          return this.props.navigation.navigate('Layoutscreen');
        } catch (e) {
          // saving error
          console.log(e);
        }
      } else {
        Toast.show('Invalid Credentials!', Toast.LONG);
        console.log(res.errors);
      }
    }
  };

  render() {
    const theme = this.context;
    return (
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <StatusBar backgroundColor={theme.backgroundColor} />
        <View
          style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
          <Image source={logo} style={styles.logo} />
        </View>
        <KeyboardAvoidingView style={styles.formContainer}>
          {/* <TextInput
           autoFocus={true}
            placeholder="Email"
            placeholderTextColor="rgba(33,33,33,)"
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={val => this.onChangeText("email", val)}
            hasTvPrefferedFocus={true}
          /> */}
          {/* <TextInput
            autoFocus={true}
            placeholder="Email/Username"
            placeholderTextColor="rgba(33,33,33,0.9)"
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={val => this.onChangeText("email", val)}
            hasTvPrefferedFocus={true}
          /> */}
          <TextInput
            // hasTvPrefferedFocus={true}
            textContentType="password"
            autoFocus={true}
            secureTextEntry={true}
            password={true}
            placeholder="Password"
            placeholderTextColor="rgba(33,33,33,0.9)"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => this.onChangeText('password', val)}
          />

          <TouchableOpacity
            style={styles.textInputBtn}
            onPress={this.onPressLogin}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.linkText}>Forgot password ?</Text>
          </TouchableOpacity>  */}
          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.linkText2}>New User?Sign up</Text>
          </TouchableOpacity> */}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Loginpassword;
