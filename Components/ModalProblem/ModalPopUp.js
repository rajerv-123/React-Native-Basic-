import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ModalPopUp() {
  const [modal, toggleModal] = useState(false);
  const navigation = useNavigation();

  const modalToggle = () => {
    toggleModal(!modal);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Button title="Click Here" onPress={modalToggle} />
      {!modal ? (
        <View>
          <Text>Modal is toggled by clicking on the button</Text>
          <View style={styles.modalStyle}>
            <Text>This is the modal content</Text>
          </View>
        </View>
      ) : null}
      <View style={{ marginTop: 50 }}>
        <Button title="Go Back" onPress={goBack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    height: 400,
    width: 400,
  },
});

export default ModalPopUp;
