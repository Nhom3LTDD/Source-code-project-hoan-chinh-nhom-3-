/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Keyboard,Image} from 'react-native';



export default class SignIn extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
    }
}
LOGIN() {
    fetch('http://192.168.3.166:82/TracNghiem/login.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
        }),
    })
        .then((response) => response.json())
        .then((responseJson) => {
           if(responseJson == "true"){
               this.props.navigation.navigate('GoiCau');
           }else{
               alert("Email hoặc password không đúng!!!");
           }
        })
        .catch((error) => {
            console.error(error);
        }); 

}
  render() {
    return (
      <View style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image style={styles.logo}
                        source={require('./image/login.jpg')}
                    >
                    </Image>
                </View>
                <View style={styles.infocontainer}>
                    <TextInput style={styles.username}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        placeholder='Email'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        autoFocus={true}
                        returnKeyType='next'
                        autoCorrect={false}//không hiện ra gợi ý khi nhập
                        onSubmitEditing={() => this.refs.password.focus()}
                    />
                    <TextInput style={styles.passwrod}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        placeholder='Password'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        //autoFocus={true}
                        returnKeyType='next'
                        secureTextEntry={true}
                        autoCorrect={false}//không hiện ra gợi ý khi nhập
                    // onSubmitEditing={() => this.refs.edhoten.focus()}
                    />
                    <View style={styles.button}>
                        <View style={styles.btndangnhap}>
                            <TouchableOpacity onPress={() => this.LOGIN()}
                            //onPress={() => this.props.navigation.navigate('DanhSach')}
                            >
                                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,// co giản màn hình
        backgroundColor: '#4B610B',
    },
    logocontainer: {
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 100,
        flex: 1

    },
    infocontainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        // backgroundColor:'red'
    },
    logo: {
        width: 150,
        height: 85

    },
    username: {
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        marginBottom: 5,
        margin: 20,
        //marginLeft: 70,
        //marginRight: 10,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        //paddingHorizontal: 10,
        borderRadius: 20,

    },
    passwrod: {
        //paddingHorizontal: 10,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        margin: 20,
        //marginLeft: 70,
        height: 40,
        //marginRight: 10,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,

    },
    button: {
        //paddingHorizontal: 10,
        flexDirection: 'column',
    },
    btndangnhap: {
        //paddingHorizontal: 10,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        margin: 20,
        borderRadius: 20,
        //marginLeft: 70,
        height: 40,
        //marginRight: 10,
        marginBottom: 5,
        backgroundColor: '#c0b01d',
    },
    
});