import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red: number, green: number, blue: number}
  //action represents "how to change state object"
  // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

  const isInvalidRed = state.red + action.payload > 255 || state.red + action.payload < 0;
  const isInvalidGreen = state.green + action.payload > 255 || state.green + action.payload < 0;
  const isInvalidBlue = state.blue + action.payload > 255 || state.blue + action.payload < 0;

  switch (action.type) {
    case 'change_red':
      return isInvalidRed ? state : {...state, red: state.red + action.payload} //If red is invalid, return original state object. If valid return a new state object. 
      //Destructuring help:
      //...state takes all original state and brings it to new object. Then "red" 
      //section overwrites the original red. We never want to directly change the state object. just return new ones. 
    case 'change_green':
      return isInvalidGreen ? state : {...state, green: state.green + action.payload} 
    case 'change_blue':
      return isInvalidBlue ? state : {...state, blue: state.blue + action.payload} 
    default: 
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0}); //This red green blue object is what state will be initialized as
  //dispatch could be named "runMyReducer()"
  
  const {red, green, blue } = state; 

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
