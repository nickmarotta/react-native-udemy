import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

/*

Notes: 
- TextInput has absolutely no styling by default. 
- Its super frequent to add in some special props to disable things like autocorrect (think passwords/emails)
    - autoCapitalize="none"
    - autoCorrect={false}

- Generally, there is NO situation where we want a parent element to reach down and "inspect" the value of a child. 
  You might think that this is something we would want to do with TextInput. Don't. 
  We will use props/state to manage this scenario

*/

const TextScreen = () => {
  const [password, setName] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newText) => setName(newText)}
      />
      {password.length < 4 ? <Text>Password must be longer than 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
