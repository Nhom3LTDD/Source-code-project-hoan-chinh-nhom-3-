import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

export default class giaodien extends Component {
    render() {
        return ( 
        <ImageBackground source={require('./bg.png')} style={styles.container}>
            <View style={styles.inner}>            
                <Text style={styles.textChao}> TRẮC NGHIỆM KHÁCH QUAN </Text>
                <TouchableOpacity style={styles.btnDangKi} onPress={() => this.props.navigation.navigate('DangKy')}>
                    <Text style={styles.buttonText}>Đăng Kí</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDangNhap} onPress={() => this.props.navigation.navigate('DangNhap')}>
                    <Text style={styles.buttonText}>Đăng Nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnXemDiem} onPress={() => this.props.navigation.navigate('XemDiem')}>
                    <Text style={styles.buttonText}>Xem Top Điểm Cao Nhất</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 0, 
    },
    inner: {
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(255, 255, 255, 7)',
        textAlign: 'center',
        //marginTop: 100,
    },
    textChao : {
        textAlign: 'center',
        marginTop: 20,
        fontSize : 23,
        color : 'red',
    },
    btnDangKi : {
        width: 200,
        height: 50,
        marginTop: 50,
        marginLeft: 70,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue',
        alignItems: 'center',
        backgroundColor : 'yellow',
        justifyContent: 'center'
    },
    btnDangNhap : {
        width: 200,
        height: 50,
        marginTop: 50,
        marginLeft: 70,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue',
        alignItems: 'center',
        backgroundColor : 'yellow',
        justifyContent: 'center'
    },
    btnXemDiem : {
        width: 200,
        height: 50,
        marginTop: 50,
        marginLeft: 70,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue',
        alignItems: 'center',
        backgroundColor : 'yellow',
        justifyContent: 'center'
    }
})
