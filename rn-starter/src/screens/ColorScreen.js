import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          /*
          '...' operator takes a copy of the colors array and returns a new one 
          [...colors, randomRgb()] is initializing a new array, putting in first all the values from colors, and then adding a new element which is the result of randomRgb()
          again, we can't modify the colors array because useState needs to be able to keep track of this variable so it changes on the screen. 
        */
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item} //Theres definitely a chance that this key would be duplicated because randomRbg could return the same value twice, but I don't think we care for this example.
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
