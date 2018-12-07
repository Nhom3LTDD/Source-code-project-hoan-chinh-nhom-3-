import React from 'react';
import { Button, View, Text,ActivityIndicator,FlatList,TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
export default class CauHoi4 extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  resultTrue() {
    alert("Đáp án đúng");
  }
  resultFalse() {
    alert("Đáp án sai");
  }
  componentDidMount(){
    return fetch('http://192.168.3.166:82/TracNghiem/CauHoi4.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <ImageBackground source={require('./bg.png')} style={styles.container}>
      <View style={{ flex: 1, margin:20 }}>
       <Text style={{ marginBottom: 20, textAlign: 'center', backgroundColor: 'green', fontSize: 20, color: "white" }}>CÂU HỎI TRẮC NGHIỆM</Text>
        <Text style={{ marginBottom: 20 }}>CÂU HỎI 4:</Text>  
        <Text style={{ marginBottom: 20 }}>Hãy chọn câu trả lời chính xác:</Text>  
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text> {item.de} </Text>}
          keyExtractor={({id}, index) => id}
        />

        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity style={styles.cauhoi} onPress={() => this.resultTrue()}>
        <Text style = {styles.text}>A: 64</Text>
                </TouchableOpacity>
        <TouchableOpacity style={styles.cauhoi2} onPress={() => this.resultFalse()}>
        <Text style = {styles.text}>B: 56</Text>
                </TouchableOpacity>
        </View>
        
        

        <Button
          title="Tiếp"
          color="grey"
          onPress={() => this.props.navigation.navigate('DapAn')}
        /> 
        <Button
          title="Quay lại"
          color="yellow"
          onPress={() => this.props.navigation.navigate('GoiCau')}
        />
        
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
  cauhoi: {
    backgroundColor: 'green', 
    marginBottom: 20,
    width: 100, 
    height: 50, 
    marginLeft: 8
  },
  cauhoi2: {
    backgroundColor: 'blue', 
    marginBottom: 20,
    width: 100, 
    height: 50, 
    marginLeft: 60
  },
  text: {
    color: 'white',
    textAlign: "center",
    paddingTop: 15,
    fontSize: 15,
  }
});


