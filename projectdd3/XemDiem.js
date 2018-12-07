import React from 'react';
import { Button, View, Text,ActivityIndicator,FlatList} from 'react-native';
export default class XemDiem extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('http://192.168.3.166:82/TracNghiem/XemDiemCao.php')
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
      <View style={{ flex: 1, margin:20 }}>
       <Text style={{ marginBottom: 20, textAlign: 'center', backgroundColor: 'yellow', height: 30, borderRadius: 10,borderColor: 'blue', borderWidth: 2,alignItems: 'center' }}>BẢNG XẾP HẠNG</Text>
        <Text style={{ marginBottom: 20 }}> Điểm Đạt Được:</Text>  
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text> {item.name}  Điểm.{item.sodiem} </Text>}
          keyExtractor={({id}, index) => id}
        />
        <Button
          title="Quay Lại"
          color="pink"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
      </View>
    );
  }
}

