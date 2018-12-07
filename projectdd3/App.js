import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import DapAn from './DapAn';
import BangDiem from './BangDiem';
import GoiCau from './GoiCau';
import CauHoi from './CauHoi';
import SignIn from './SignIn';
import SignUp from './SignUp';
import giaodien from './giaodien';
import XemDiem from './XemDiem';
import CauHoi2 from './CauHoi2';
import CauHoi3 from './CauHoi3';
import CauHoi4 from './CauHoi4';
const RootStack = createStackNavigator(
  {
    DapAn: DapAn,
    Diem: BangDiem,
    GoiCau: GoiCau,
    CauHoi: CauHoi,
    CauHoi2: CauHoi2,
    CauHoi3: CauHoi3,
    CauHoi4: CauHoi4,
    DangNhap: SignIn,
    DangKy: SignUp,
    XemDiem: XemDiem,
    HomeScreen: giaodien,
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
