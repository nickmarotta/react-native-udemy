import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  /*
    https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706650#overview
    Section 6 pt 41

    param for useState is 0 - this is the default value

    [counter, setCounter] is array destructuring
    useState returns an array, and we use array destructuring to assign 
    `counter` to `useState(0)[0]` and 
    `setCounter` to `useState(0)[1]`  

    Because we're using the state stuff, we CANNOT modify a state variable directly.
    counter++ will not work and trigger a state update. 
    We need to use the setCounter that we destructured

  */
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
