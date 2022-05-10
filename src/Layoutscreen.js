import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {styles} from './Logintv.style';
import logo from './assests/logo.png';
import {
  ImageBackground,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import {Themecontext} from './Theme/Themecontext';
import {FontContext} from './FontSize/FontContext';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Layoutscreen extends Component {
  static contextType = Themecontext;
  static fontType = FontContext;
  constructor(props) {
    super(props);
    this.state = {
      datascr: [],
      extension: '',
      extension2: '',
      types: 'splash',
    };
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    // console.log(token);
    fetch('http://196.29.238.100:8002/layout/campaign/list/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + token,
      },
    })
      .then(response => response.json())
      .then(res => {
        // console.log(res[0].templates, 'template');
        this.setState({datascr: res[0].templates}, () => {
          this.layoutrun();
        });
        //     if(res) {
        //     }else{
        //     console.log(res.errors)
        // }
      });
  }

  layoutrun() {
    var index = 0;
    // console.log('hiii1', this.state.datascr);
    this.timer = setInterval(() => {
      this.setState({
        heading1: this.state.datascr[index].heading1,
        heading2: this.state.datascr[index].heading2,
        heading3: this.state.datascr[index].heading3,
        heading4: this.state.datascr[index].heading4,
        heading5: this.state.datascr[index].heading5,
        icon1: this.state.datascr[index].icon1,
        icon2: this.state.datascr[index].icon2,
        icon3: this.state.datascr[index].icon3,
        icon4: this.state.datascr[index].icon4,
        icon5: this.state.datascr[index].icon5,
        id: this.state.datascr[index].id,
        image1: this.state.datascr[index].image1,
        image2: this.state.datascr[index].image2,
        image3: this.state.datascr[index].image3,
        image4: this.state.datascr[index].image4,
        image5: this.state.datascr[index].image5,
        image6: this.state.datascr[index].image6,
        name: this.state.datascr[index].name,
        subheading1: this.state.datascr[index].subheading1,
        subheading2: this.state.datascr[index].subheading2,
        subheading3: this.state.datascr[index].subheading3,
        subheading4: this.state.datascr[index].subheading4,
        subheading5: this.state.datascr[index].subheading5,
        text1: this.state.datascr[index].text1,
        text10: this.state.datascr[index].text10,
        text11: this.state.datascr[index].text11,
        text12: this.state.datascr[index].text12,
        text13: this.state.datascr[index].text13,
        text14: this.state.datascr[index].text14,
        text15: this.state.datascr[index].text15,
        text16: this.state.datascr[index].text16,
        text17: this.state.datascr[index].text17,
        text18: this.state.datascr[index].text18,
        text19: this.state.datascr[index].text19,
        text2: this.state.datascr[index].text2,
        text20: this.state.datascr[index].text20,
        text3: this.state.datascr[index].text3,
        text4: this.state.datascr[index].text4,
        text5: this.state.datascr[index].text5,
        text6: this.state.datascr[index].text6,
        text7: this.state.datascr[index].text7,
        text8: this.state.datascr[index].text8,
        text9: this.state.datascr[index].text9,
        timming: this.state.datascr[index].timming,
        types: this.state.datascr[index].types,
        user: this.state.datascr[index].user,
      });
      // console.log(this.state.datascr[index].image1, 'hiii');
      var extension = this.state.datascr[index].image1
        ? this.state.datascr[index].image1.split('.').pop()
        : null;
      var extension2 = this.state.datascr[index].text1
        ? this.state.datascr[index].text1.split('.').pop()
        : null;
      this.setState({extension, extension2});
      index = (index + 1) % this.state.datascr.length;
      // console.log(this.state.datascr[index].name);
    }, this.state.datascr[index].timming * 1000);
  }

  render() {
    const theme = this.context;
    const fontsize = this.context;
    return (
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <StatusBar backgroundColor={theme.backgroundColor} />
        {this.state.types == 'splash' ? (
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={[{color:theme.color},{fontSize:fontsize.fontSize}]}>Campaigns are loading...</Text>
          </View>
        ) : this.state.types == 1 ? (
          <ImageBackground
            source={{uri: this.state.image1}}
            style={{width: '100%', height: '100%'}}>
            <View
              style={{
                width: '50%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 40}}>
                {this.state.heading1}
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 40}}>
                {this.state.heading2}
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 40}}>
                {this.state.heading3}
              </Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '50%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {this.state.text1}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {this.state.text2}
                </Text>
              </View>
            </View>
          </ImageBackground>
        ) : this.state.types == 2 ? (
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={{uri: this.state.image1}}>
            <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '50%', height: '20%'}}
                  source={{uri: this.state.image2}}
                />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={{
                    width: '48%',
                    height: '48%',
                    backgroundColor: 'rgba(0, 0, 0, 0.498)',
                    margin: '1%',
                  }}>
                  <View style={{width: '100%', height: '50%'}}>
                    <View
                      style={{
                        width: '100%',
                        height: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 25}}>
                        {this.state.heading1}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 20}}>
                        {this.state.text1}
                      </Text>
                    </View>
                  </View>
                  <View style={{width: '100%', height: '50%'}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={{uri: this.state.image3}}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '48%',
                    height: '48%',
                    backgroundColor: 'rgba(0, 0, 0, 0.498)',
                    margin: '1%',
                  }}>
                  <View style={{width: '100%', height: '50%'}}>
                    <View
                      style={{
                        width: '100%',
                        height: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 25}}>
                        {this.state.heading2}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 20}}>
                        {this.state.text2}
                      </Text>
                    </View>
                  </View>
                  <View style={{width: '100%', height: '50%'}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={{uri: this.state.image4}}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '48%',
                    height: '48%',
                    backgroundColor: 'rgba(0, 0, 0, 0.498)',
                    margin: '1%',
                  }}>
                  <View style={{width: '100%', height: '50%'}}>
                    <View
                      style={{
                        width: '100%',
                        height: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 25}}>
                        {this.state.heading3}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 20}}>
                        {this.state.text3}
                      </Text>
                    </View>
                  </View>
                  <View style={{width: '100%', height: '50%'}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={{uri: this.state.image5}}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '48%',
                    height: '48%',
                    backgroundColor: 'rgba(0, 0, 0, 0.498)',
                    margin: '1%',
                  }}>
                  <View style={{width: '100%', height: '50%'}}>
                    <View
                      style={{
                        width: '100%',
                        height: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 25}}>
                        {this.state.heading4}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 20}}>
                        {this.state.text4}
                      </Text>
                    </View>
                  </View>
                  <View style={{width: '100%', height: '50%'}}>
                    <Image
                      style={{width: '100%', height: '100%'}}
                      source={{uri: this.state.image6}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        ) : this.state.types == 3 ? (
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={{uri: this.state.image1}}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
              }}>
              <View
                style={{width: '100%', height: '20%', flexDirection: 'row'}}>
                <View
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 25}}>
                    {this.state.heading1}
                  </Text>
                </View>
                <View
                  style={{
                    width: '50%',
                    height: '98%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: 'white',
                    borderTopWidth: 1,
                    marginTop: '2%',
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>
                    {this.state.heading2}
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 25}}>
                    {this.state.heading3}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '75%',
                  marginTop: '5%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '20%',
                    height: '80%',
                    borderRightWidth: 1,
                    borderColor: 'white',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'orange',
                        fontSize: 35,
                        fontWeight: 'bold',
                      }}>
                      {this.state.subheading1}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '70%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 25}}>
                      {this.state.text1}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '20%',
                    height: '80%',
                    borderRightWidth: 1,
                    borderColor: 'white',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'orange',
                        fontSize: 35,
                        fontWeight: 'bold',
                      }}>
                      {this.state.subheading2}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '70%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 25}}>
                      {this.state.text2}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '20%',
                    height: '80%',
                    borderRightWidth: 1,
                    borderColor: 'white',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'orange',
                        fontSize: 35,
                        fontWeight: 'bold',
                      }}>
                      {this.state.subheading3}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '70%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 25}}>
                      {this.state.text3}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '20%',
                    height: '80%',
                    borderRightWidth: 1,
                    borderColor: 'white',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'orange',
                        fontSize: 35,
                        fontWeight: 'bold',
                      }}>
                      {this.state.subheading4}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '70%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 25}}>
                      {this.state.text4}
                    </Text>
                  </View>
                </View>
                <View
                  style={{width: '20%', height: '80%', alignItems: 'center'}}>
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'orange',
                        fontSize: 35,
                        fontWeight: 'bold',
                      }}>
                      {this.state.subheading5}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '70%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 25}}>
                      {this.state.text5}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        ) : this.state.types == 4 ? (
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={{uri: this.state.image1}}>
            <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
              <View
                style={{
                  width: '65%',
                  height: '100%',
                  backgroundColor: 'rgba(245, 245, 66, 0.6)',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '50%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'green', fontSize: 40, fontWeight: 'bold'}}>
                    {this.state.heading1}
                  </Text>
                  <Text
                    style={{color: 'green', fontSize: 40, fontStyle: 'italic'}}>
                    {this.state.heading2}
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '45%',
                    marginTop: '5%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 'auto',
                      height: 'auto',
                      borderTopWidth: 2,
                      borderBottomWidth: 2,
                      borderColor: 'black',
                    }}>
                    <Text style={{color: 'black', fontSize: 30}}>
                      {this.state.heading3}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '35%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '50%',
                    height: '30%',
                    backgroundColor: 'rgba(245, 245, 66, 0.6)',
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 30, fontStyle: 'italic'}}>
                    {this.state.text1}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        ) : this.state.types == 15 ? (
          <View
            style={{width: '100%', height: '100%', backgroundColor: '#2881fc'}}>
            <View style={{width: '100%', height: '25%'}}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode={'cover'}
                source={{uri: this.state.image1}}
              />
            </View>
            <View style={{width: '100%', height: '25%'}}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode={'cover'}
                source={{uri: this.state.image2}}
              />
            </View>
            <View style={{width: '100%', height: '25%', flexDirection: 'row'}}>
              <View style={{width: '50%', height: '100%'}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode={'cover'}
                  source={{uri: this.state.image3}}
                />
              </View>
              <View style={{width: '50%', height: '100%'}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode={'cover'}
                  source={{uri: this.state.image4}}
                />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: '90%', height: '90%'}}>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'grey',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 15}}>
                      {this.state.heading1}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 15}}>
                      {this.state.heading2}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 15}}>
                      {this.state.heading3}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 15}}>
                      {this.state.heading4}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'white',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text1}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text2}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text3}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text4}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'white',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text5}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text6}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text7}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text8}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'white',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text9}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text10}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text11}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '25%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 13}}>
                      {this.state.text12}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : this.state.types == 16 ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              paddingRight: '10%',
              paddingLeft: '10%',
              backgroundColor: 'blue',
            }}>
            <View
              style={{
                width: '100%',
                height: '15%',
                borderBottom: '1px solid white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Image
                style={{width: '50%', height: '80%'}}
                source={{uri: this.state.image1}}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: '30%',
                padding: 10,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 25, marginBottom: 0}}>
                {this.state.heading1}
              </Text>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                {this.state.heading2}
              </Text>
              <Image
                style={{width: '100%', height: '65%'}}
                source={{uri: this.state.image2}}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: '40%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                {this.state.heading3}
              </Text>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={{
                    width: '50%',
                    height: '50%',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.state.icon1}}
                  />
                  <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                    {this.state.text1}
                  </Text>
                </View>
                <View
                  style={{
                    width: '50%',
                    height: '50%',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.state.icon2}}
                  />
                  <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                    {this.state.text2}
                  </Text>
                </View>
                <View
                  style={{
                    width: '50%',
                    height: '50%',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.state.icon3}}
                  />
                  <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                    {this.state.text3}
                  </Text>
                </View>
                <View
                  style={{
                    width: '50%',
                    height: '50%',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.state.icon4}}
                  />
                  <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                    {this.state.text4}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: '13%',
                borderBottom: '1px solid white',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  marginBottom: 0,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                {this.state.heading4}
              </Text>
            </View>
          </View>
        ) : this.state.types == 17 ? (
          <View
            style={{width: '100%', height: '100%', backgroundColor: 'blue'}}>
            <View
              style={{width: '100%', height: '30%', backgroundColor: 'blue'}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: this.state.image1}}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: '20%',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px solid white',
              }}>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  borderRightWidth: 1,
                  borderRightColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  paddingRight: '5%',
                }}>
                <Text style={{color: 'white', fontSize: 25, marginBottom: 0}}>
                  {this.state.heading1}
                </Text>
                <Text
                  style={{
                    color: 'yellow',
                    fontSize: 25,
                    marginBottom: 0,
                    fontWeight: 'bold',
                  }}>
                  {this.state.heading2}
                </Text>
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingLeft: '5%',
                }}>
                <Text style={{color: 'white', fontSize: 25, marginBottom: 0}}>
                  {this.state.heading3}
                </Text>
                <Text
                  style={{
                    color: 'yellow',
                    fontSize: 25,
                    marginBottom: 0,
                    fontWeight: 'bold',
                  }}>
                  {this.state.heading4}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: '25%',
                flexDirection: 'column',
                display: 'flex',
                padding: '1%',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginBottom: 0,
                  fontWeight: 'bold',
                }}>
                {this.state.text1}
              </Text>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                {this.state.text2}
              </Text>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                {this.state.text3}
              </Text>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                {this.state.text4}
              </Text>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                {this.state.text5}
              </Text>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 0}}>
                {this.state.text6}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: '25%',
                flexDirection: 'row',
                display: 'flex',
              }}>
              <View style={{width: '50%', height: '100%'}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{uri: this.state.image2}}
                />
              </View>
              <View style={{width: '50%', height: '100%'}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{uri: this.state.image3}}
                />
              </View>
            </View>
          </View>
        ) : this.state.types == 18 ? (
          <View style={{flexDirection: 'column', display: 'flex'}}>
            <View
              style={{width: '100%', height: '60%', backgroundColor: 'black'}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: this.state.image1}}
              />
            </View>
            <View
              style={{width: '100%', height: '40%', backgroundColor: 'black'}}>
              <View
                style={{
                  width: '100%',
                  height: '80%',
                  borderBottomColor: 'white',
                  borderTopColor: 'white',
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  backgroundColor: 'brown',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Text
                  style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                  {this.state.heading1}
                </Text>
                <Text
                  style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                  {this.state.heading2}
                </Text>
              </View>
            </View>
          </View>
        ) : this.state.types == 11 ? (
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode={'contain'}
            source={{uri: this.state.image1}}>
            {this.state.extension == 'mp4' ||
            this.state.extension2 == 'm3u8' ? (
              <Video
                source={{
                  uri: this.state.text1 ? this.state.text1 : this.state.image1,
                }}
                repeat={true}
                fullscreen={true}
                resizeMode={'contain'}
                style={{
                  height: windowHeight,
                  width: windowWidth,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              />
            ) : null}
          </ImageBackground>
        ) : this.state.types == 19 ? (
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode={'stretch'}
            source={{uri: this.state.image1}}>
            {this.state.extension == 'mp4' ||
            this.state.extension2 == 'm3u8' ? (
              <Video
                source={{
                  uri: this.state.text1 ? this.state.text1 : this.state.image1,
                }}
                repeat={true}
                fullscreen={true}
                resizeMode={'contain'}
                style={{
                  height: windowHeight,
                  width: windowWidth,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              />
            ) : null}
          </ImageBackground>
        ) : null}
      </View>
    );
  }
}

export default Layoutscreen;
