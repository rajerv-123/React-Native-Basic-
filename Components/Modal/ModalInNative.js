import React, { useState } from "react";
import { View, Button, StyleSheet, Modal, Text } from "react-native";

function ModalInNetive() {
  const [popUpModal, setPopUpModal] = useState(false);

  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={popUpModal} animation="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Here we are learn about the madal
            </Text>
            <Button title="close Modal" onPress={() => setPopUpModal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonView}>
        <Button title="Click Here" onPress={() => setPopUpModal(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "skyblue",
    padding: 40,
    borderRadius: 20,
    shadowColor: "black",
    ekevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  },
});
export default ModalInNetive;
