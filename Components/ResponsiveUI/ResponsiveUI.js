import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ResponsiveUI() {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}></View>
        <View style={styles.innerBox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: { flex: 2, backgroundColor: "blue", flexDirection: "row" },
  innerBox1: {
    flex: 1,
    backgroundColor: "orange",
    margin: 10,
  },
  innerBox2: {
    flex: 1,
    backgroundColor: "grey",
    margin: 10,
  },
  innerBox3: {
    flex: 1,
    backgroundColor: "red",
    margin: 10,
  },
  box2: { flex: 1, backgroundColor: "green" },
  box3: { flex: 1, backgroundColor: "pink" },
  box4: { flex: 1, backgroundColor: "yellow" },
});

export default ResponsiveUI;
