import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function IncreDecre() {
    const [increment ,setIncrement] = useState(0);
    const [decrement ,setDecrement] = useState(0);

    const fuctionForIncrement = () =>{
        setIncrement((num)=>num + 1)
    }
    const fuctionForDecrement = () =>{
        setDecrement((num)=>num - 1)
    }
  return (
    <View>
      <Text
        style={{ fontSize: 20, textAlign: "center", justifyContent: "center" }}
      >
        Increment and Decrement{" "}
      </Text>
      <Button title="increment" onPress={fuctionForIncrement}/> 
        <Text>{increment}</Text>
      <Button title="decrement" onPress={fuctionForDecrement} /> 
      <Text>{decrement}</Text>
    </View>
  );
}

export default IncreDecre;
