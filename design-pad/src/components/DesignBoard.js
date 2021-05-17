import React from "react";
import DesignPad from "./DesignPad";
import "../css/Styles.css";

class DesignBoard extends React.Component {
  render() {
    return (
      // These are the four pads that will have their color changed once the dragged color is dropped on top of it
      <div>
        <DesignPad />
        <DesignPad />
        <DesignPad />
        <DesignPad />
      </div>
    );
  }
}

export default DesignBoard;