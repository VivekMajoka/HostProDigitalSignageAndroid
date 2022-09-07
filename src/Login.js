import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  Appearance,
  StatusBar,
} from 'react-native';
import {styles} from './Logintv.style';
import logo from './assests/digiLogo.png';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Themecontext} from './Theme/Themecontext';
import {FontContext} from './FontSize/FontContext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Login extends Component {
  static contextType = Themecontext;
  static fonttype = FontContext;
  state = {
    email: '',
    password: '',
    // mode : this.context
    // email:'',
    // password:''
  };
  fieldRef = React.createRef();

  onSubmit = () => {
    let {current: field} = this.fieldRef;

    // console.log(field.value());
  };

  formatText = text => {
    return text.replace(/[^+\d]/g, '');
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  onPressNext = () => {
    if (!this.state.email)
      // alert("please enter email")
      Toast.show('Please Enter Email', Toast.LONG);
    else {
      this.props.navigation.navigate('Loginpassword', {
        email: this.state.email,
      });
      this.setState({email: ''});
    }
  };

  render() {
    const theme = this.context;
    const fontsize = this.context;
    // alert(JSON.stringify(mode));
    return (
      // <View
      //   style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      //   <StatusBar backgroundColor={theme.backgroundColor} />
      //   <View
      //     style={{
      //       height: '50%',
      //       width: '100%',
      //       // borderColor: '#212121',
      //       // borderWidth: 1,
      //     }}>
      //     <View
      //       style={[
      //         styles.logoContainer,
      //         {backgroundColor: theme.backgroundColor},
      //       ]}>
      //       <Image source={logo} style={[styles.logo]} />
      //     </View>
      //   </View>
      //   <KeyboardAvoidingView style={[styles.formContainer]}>
      //     <TextInput
      //       autoFocus={true}
      //       value={this.state.email}
      //       placeholder="Email/Username"
      //       placeholderTextColor="rgba(33,33,33,0.9)"
      //       style={[styles.textInput, {fontSize: fontsize.fontSize}]}
      //       autoCapitalize="none"
      //       onChangeText={val => this.onChangeText('email', val)}
      //       hasTvPrefferedFocus={true}
      //     />
      //     {/* <TextInput
      //     hasTvPrefferedFocus={true}
      //       textContentType="password"
      //       secureTextEntry={true}
      //       password={true}
      //       placeholder="Password"
      //       placeholderTextColor="rgba(33,33,33,0.5)"
      //       style={styles.textInput}
      //       autoCapitalize='none'
      //       onChangeText={val => this.onChangeText("password", val)}
      //     />  */}
      //     <TouchableOpacity
      //       style={styles.textInputBtn}
      //       onPress={this.onPressNext}>
      //       <Text style={styles.btnText}>NEXT</Text>
      //     </TouchableOpacity>
      //     {/* <TouchableOpacity>
      //       <Text style={styles.linkText}>Forgot password ?</Text>
      //     </TouchableOpacity> */}
      //     {/* <TouchableOpacity
      //       onPress={() => this.props.navigation.navigate("Signup")}
      //     >
      //       <Text style={styles.linkText2}>Already user?Sign in</Text>
      //     </TouchableOpacity> */}
      //   </KeyboardAvoidingView>
      // </View>
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
            // textContentType="password"
            autoFocus={true}
            // secureTextEntry={true}
            // password={true}
            placeholder="Username/Email"
            placeholderTextColor="rgba(33,33,33,0.9)"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => this.onChangeText('email', val)}
          />

          <TouchableOpacity
            style={styles.textInputBtn}
            onPress={this.onPressNext}>
            <Text style={styles.btnText}>CONTINUE</Text>
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

export default Login;
