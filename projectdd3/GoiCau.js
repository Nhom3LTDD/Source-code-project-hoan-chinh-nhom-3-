
import React from 'react';
import { Button, View, Text,  StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
export default class GoiCau extends React.Component {
  
  render() {
    return (
      <ImageBackground source={require('./bg.png')} style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', marginBottom: 20 }}>
       <Text style={{ marginBottom: 20, textAlign: 'center', color: 'white', fontSize: 23 }}>CÂU HỎI TRẮC NGHIỆM</Text>
        <Text style={{ marginBottom: 20, color: 'white', textAlign: "center" }}>CHỌN CÂU HỎI</Text>    
        <TouchableOpacity style={styles.btnGoiCau} onPress={() => this.props.navigation.navigate('CauHoi')}>
        <Text style={styles.btnText}>Câu hỏi 1</Text>
                </TouchableOpacity>
        <TouchableOpacity style={styles.btnGoiCau1}  onPress={() => this.props.navigation.navigate('CauHoi2')}>
        <Text style={styles.btnText}>Câu hỏi 2</Text>
                </TouchableOpacity>
        <TouchableOpacity style={styles.btnGoiCau2}  onPress={() => this.props.navigation.navigate('CauHoi3')}>
                    <Text style={styles.btnText}>Câu hỏi 3</Text>
                </TouchableOpacity>
        <TouchableOpacity style={styles.btnGoiCau3}  onPress={() => this.props.navigation.navigate('CauHoi4')}>
                    <Text style={styles.btnText}>Câu hỏi 4</Text>
                </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    
    justifyContent: 'center',
    //marginTop: 0, 
},
  btnGoiCau : {
    width: 200,
    height: 50,
    marginTop: 50,
    marginLeft: 70,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor : 'red',
    justifyContent: 'center'
},
btnGoiCau1 : {
  width: 200,
  height: 50,
  marginTop: 50,
  marginLeft: 70,
  borderRadius: 20,
  borderWidth: 2,
  alignItems: 'center',
  backgroundColor : 'blue',
  justifyContent: 'center'
},
btnGoiCau2 : {
  width: 200,
  height: 50,
  marginTop: 50,
  marginLeft: 70,
  borderRadius: 20,
  borderWidth: 2,
  alignItems: 'center',
  backgroundColor : 'yellow',
  justifyContent: 'center'
},
btnGoiCau3 : {
  width: 200,
  height: 50,
  marginTop: 50,
  marginLeft: 70,
  borderRadius: 20,
  borderWidth: 2,
  alignItems: 'center',
  backgroundColor : 'pink',
  justifyContent: 'center'
},
btnText :{
  color: 'white'
}
});
  