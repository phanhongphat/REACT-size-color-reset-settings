import React, { Component } from 'react';

class ColorPicker extends Component {
 
 	constructor (props){
 		super(props);
 		this.state = {
 			colors : ['red' , 'blue' , 'green', '#ccc']
 		};
 	}

 	ShowColor (color){

 		return {

 			backgroundColor : color
 		}
 	}
 	
 	ActiveColor(color) {
 		this.props.ReceiveColor(color)	// ColorPicker nhận color từ App.js =props, 
 	}

 render() {

 	var elmColors = this.state.colors.map((color, index) => {
 		return <span 
 					key = {index} 
 					style = {this.ShowColor(color)}							//Colorpicker nhận color từ App.js = this.props
 					className = {this.props.color === color ? 'active' : '' } 	// toán tử 3 ngôi: if color bên app.js truyền qua = color 
 																			//bên ColorPick.js thì active,ko thì ko xuất ra gì
 					onClick = { () =>  this.ActiveColor(color) }	//bắt sự kiện onlick khi click vào panel để change màu
 					></span>
 	});
 		
    return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Coler Picker</h3>
                </div>              
                <div className="panel-body">

                { elmColors }

                <hr/>
              </div>
            </div>
          </div>
    );
  }
}

export default ColorPicker;
