
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        }
    }
    insertaccount() {
        fetch('http://192.168.3.166:82/TracNghiem/account.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }),
        })
            .then((responseJson) => {
                alert("Tạo tài khoản thành công!");
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
                        source={require('./image/logo1.png')}
                    >
                    </Image>
                </View>
                <TextInput style={styles.hoten}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                    placeholder='Họ tên'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    autoFocus={true}
                    returnKeyType='next'
                    autoCorrect={false}//không hiện ra gợi ý khi nhập
                    onSubmitEditing={() => this.refs.email.focus()}
                />
                <TextInput style={styles.username}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    placeholder='Tài khoản'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='next'
                    autoCorrect={false}//không hiện ra gợi ý khi nhập
                    onSubmitEditing={() => this.refs.password.focus()}
                />
                <TextInput style={styles.matkhau}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    placeholder='Mật khẩu'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='next'
                    secureTextEntry={true}
                    autoCorrect={false}//không hiện ra gợi ý khi nhập
                />
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.btnxacnhan}>
                        <TouchableOpacity onPress={() => this.insertaccount()}
                        >
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', }}>Sign UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B610B',
    },
    hoten: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        marginBottom: 5,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,
    },
    username: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,
    },
    matkhau: {
        margin: 20,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,

    },
    result: {
        margin: 20,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    btnxacnhan: {
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        alignItems: 'center',
        margin: 20,
        height: 40,
        marginBottom: 5,
        backgroundColor: '#4d1c2f',
        borderRadius: 20,
    },
    logocontainer: {
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 100,
        flex: 1

    },
    logo: {
        width: 200,
        height: 100

    },
});