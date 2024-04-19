import React from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

function RadioButtons() {
  const [value, setValue] = React.useState("first");

  return (
    <View>
      <Text>React Native Radio Buttons </Text>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <RadioButton.Item label="First item" value="first" />
        <RadioButton.Item label="Second item" value="second" />
      </RadioButton.Group>
    </View>
  );
}

export default RadioButtons;

// for the radio btton in the react native we do not have inbuilt button as like reactjs
// here we do'not have so here we are going to use React Native Paper to use the button in reactNative
