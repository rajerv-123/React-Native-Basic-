// MyClassComponent.js
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import PropsInClassComponents from "./PropsInClassComponents";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <View>
        <Text>Counter: {this.state.counter}</Text>
        <Button title="Increment" onPress={this.incrementCounter} />
        <PropsInClassComponents />
      </View>
    );
  }
}

export default MyClassComponent;
