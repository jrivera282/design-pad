import React from "react";
import "../css/Styles.css";


function PadHolder(props) {
  const DragStart = event => {
    console.log("Dragging in process");
    event.dataTransfer.setData("color", props.color);
  };

  return (
    <div draggable={props.edit} onDragStart={DragStart}>
       {props.prueba}
    </div>
  );
}


function PadInput(props) {
  return (
    <div class="main-container" >

      <div class="rows">
      <PadHolder edit={props.edit} color="blue" prueba ="1"  />
      <PadHolder edit={props.edit} color="red" prueba ="2"  />
      </div>

      <div class="rows">
      <PadHolder edit={props.edit} color="purple" prueba ="3"  />
      <PadHolder edit={props.edit} color="green" prueba ="4"  />
      </div>

      <div class="rows">
      <PadHolder edit={props.edit} color="pink" prueba ="5"  />
      <PadHolder edit={props.edit} color="yellow" prueba ="6"  />
      </div>
      
      <div class="rows">
      <PadHolder edit={props.edit} color="black" prueba ="7"  />
      <PadHolder edit={props.edit} color="orange" prueba ="8"  />
      </div>
    </div>
  );
}

 export default PadInput;