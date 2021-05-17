import React from "react";
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";
import "../css/Styles.css";

class DesignContainer extends React.Component {
  state = { edit: false };

  updateEditState = () => {
    this.setState(props => ({
      edit: !props.edit
    }));
  };

  render() {
    const btnClass = this.state.edit ? "Edit-Mode-Active" : "Edit-Mode-Default";
    const edit = this.state.edit;
    return (
      <div>
        <div>
          <h1 class="main-heading">Design Pad</h1>
          <button className={btnClass} onClick={this.updateEditState}>
            Edit
          </button>
        </div>

        <PadInput edit={edit} />
        <DesignBoard />
      </div>
    );
  }
}

export default DesignContainer;