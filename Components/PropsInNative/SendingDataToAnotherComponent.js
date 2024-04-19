import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function SendingDataToAnotherComponent() {
  const navigation = useNavigation();

  const ChildComponent = () => {
    // Navigate to "ChildComponent" and pass data as a prop
    navigation.navigate("ChildComponent", {
      data: "Hello from SendingDataToAnotherComponent",
    });
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>
          Passing Data From One Component to Another Component
        </Text>
      </View>

      <View>
        <Button title="Go To Child Component" onPress={ChildComponent} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    padding: 20,
  },
});

export default SendingDataToAnotherComponent;
