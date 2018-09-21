import React, { Component } from 'react';

import './App.css';
import Reset from './components/Reset';
import Result from './components/Result';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';

class App extends Component {
  
  constructor(props){    // biến state để lưu màu và fontsize ban đầu là red và 15px,
                        // truyền color này qua bên ColorPicker.js = this.state bên dưới
    super(props);
    this.state = {
      color : 'red',
      fontSize : 12
    };
  }
    // this.SetColor = this.SetColor.bind(this)  =  = () =>

  SetColor = (params) =>{     //truyền dữ liệu từ con qua cha : app.js sẽ dùng props truyền hàm ReceiveColor cho CP.js
                              //sau đó sẽ dùng 1 function để lấy color từ CP.js để xuất ra color sẽ =params
      this.setState ({  
        color : params
      });
  }


  onchangeSize = (value) => {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
          this.setState({  //xuất cái state của app.js
              fontSize : this.state.fontSize + value    // value là 2 và -2        
                         });
// toán ử 3 ngôi = hàm if
//    this.setState({
//                    fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36 ? this.state.fontSize + value : this.state.fontSize)
//                 });      

    }
  }

  onReset = (value) =>{
    if(value){              // = if (value === true)
        this.setState({
      color : 'red',
      fontSize : 12
                     });
    }
  }

  render() {
    return (
         <div className="container-mt50">
            <div className="row">
              <ColorPicker color = {this.state.color} ReceiveColor = { this.SetColor} />       
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
                <SizeSetting fontSize = {this.state.fontSize} onchangeSize = {this.onchangeSize} />
                <Reset onReset = {this.onReset}/>
              </div>
                <Result color ={this.state.color} fontSize = {this.state.fontSize}/> 
            </div>         
          </div>
    );
  }
}

export default App;
