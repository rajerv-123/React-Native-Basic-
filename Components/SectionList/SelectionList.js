import React from "react";
import { SectionList, Text, View } from "react-native";

function SelectionList() {
  const users = [
    {
      id: 1,
      name: "rajeev",
      data: ["react development", "dhanbad", "react native"],
    },
    {
      id: 2,
      name: "mohit",
      data: ["react development", "dhanbad", "react native"],
    },
    {
      id: 3,
      name: "soham",
      data: ["react development", "dhanbad", "react native"],
    },
    {
      id: 4,
      name: "rohit",
      data: ["react development", "dhanbad", "react native"],
    },
  ];
  return (
    <View>
      <Text style={{ fontSize: 32 }}>Seletion List in react native</Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, marginLeft: 20 }}>{item}</Text>
        )}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 25, color: "red" }}>{name}</Text>
        )}
      />
    </View>
  );
}

export default SelectionList;
