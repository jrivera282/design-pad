import React from "react";
import "../css/Styles.css";

class DesignPad extends React.Component {

  // Default pads color
  state = {
    color: "gray"
  };


  onDrop = event => {
    
    this.setState({ color: event.dataTransfer.getData("color") });
   
  };

  onDragOver = event => {
    event.preventDefault();
    
  };

  render() {
    return (
      
      <div className="hpad" onDragOver={this.onDragOver} onDrop={this.onDrop} style={{ backgroundColor: this.state.color }}>
              
      </div>
    );
  }
}
export default DesignPad;