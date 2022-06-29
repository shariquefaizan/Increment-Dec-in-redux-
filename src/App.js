import React from "react";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import {decNumber , incNumber} from "./Actions/Index";





function  App () {
  const myState= useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment and Dcrement counter </h1>
      <h4>Using react and redux </h4>
      
      <div className="quant">
        <button className="quantity  button-30  " title="Decrement"  onClick={()=>dispatch(decNumber())}>
          <span > - ONE </span>
        </button>

        <input 
          className="quantity-input "
          type="text"
          name="quntity"
          value={myState}
        />

        < button className="quantity button-30 " title="Increment"  onClick={()=>dispatch(incNumber())}>
          <span > + ONE  </span>
        </button>
      </div>
    </div>
  );
}

export default App;
