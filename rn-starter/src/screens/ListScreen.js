import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 24 },
    { name: "Friend #3", age: 27 },
    { name: "Friend #4", age: 66 },
    { name: "Friend #5", age: 31 },
    { name: "Friend #6", age: 48 },
    { name: "Friend #7", age: 28 },
    { name: "Friend #8", age: 37 },
    { name: "Friend #9", age: 46 },
  ];

  /*
        The param in the renderItem block is destructured, because 
            because it does not contain jsut the first element in the 
            `data` list. It looks like this: {item: {name: 'Friend #1}, index: 0}
        So we will destructure item off of it. 
        React needs every element to have keys for performance reasons.
            This is what key extractor is for
    */
  return (
    <FlatList
      //Other props:
      //horizontal //by writing it like this is actually does horizontal=true
      //showHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
