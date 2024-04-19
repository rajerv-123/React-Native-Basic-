import React, { useRef } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function UseRefNative() {
  const input = useRef();

  const updateInput = () => {
    input.current.focus();
    input.current.setNativeProps({
      fontSize: 24,
      color: "green",
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.input}
        placeholder="enter name"
      />
      <TextInput style={styles.input} ref={input} placeholder="enter password" />
      <Button title="update input" onPress={updateInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderRadius: 2,
    borderColor: "skyblue",
    borderWidth: 2,
    margin: 10,
  },
});

export default UseRefNative;
