import React, { Component } from "react";
import { Text, View } from "react-native";
export default class PropsInClassComponents extends Component {
  constructor() {
    super();
    this.state = {
      name: "Anil",
    };
  }
  updateName(val) {
    this.setState({ name: val });
  }
  render() {
    return (
      <View>
        <Text style={{ color: "green", fontSize: 30 }}>
          Student name : {this.props.name}
        </Text>
      </View>
    );
  }
}
