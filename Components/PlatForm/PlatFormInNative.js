import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

function PlatFormInNative() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a {Platform.OS === "ios" ? "iOS" : "Android"} app.
      </Text>
      {Platform.OS === "android " && (
        <Text style={styles.text1}>iOS-specific content</Text>
      )}
      {Platform.OS === "ios" && (
        <Text style={styles.text2}>Android-specific content</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text2: {
    fontSize: 20,
    backgroundColor: "red",
  },
});
export default PlatFormInNative;
