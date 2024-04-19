import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ChildComponent(props) {
  // Access the data passed via props
  const { data } = props;
  console.log('====================================');
  console.log(data);
  console.log('====================================');

  return (
    <View>
      <Text>This is the Child Component</Text>
      {/* Display the data from props */}
      <View>
        <Text style={styles.testStyle}>Data from Parent: {data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  testStyle: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default ChildComponent;
