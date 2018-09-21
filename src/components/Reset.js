import React, { Component } from 'react';



class Reset extends Component {

	Reset = () => {
		this.props.onReset(true);
	}

  render() {
    return (
     <div>
     <button type="button" className="btn btn-primary" onClick = {this.Reset}>Reset</button>
    
     </div>
      );
  }
}

export default Reset;
