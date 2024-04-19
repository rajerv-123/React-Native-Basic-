import React from "react";
import { View, Text, FlatList } from "react-native";

const MyFlatList = () => {
  // Sample data for the list
  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "5", title: "Item 5" },
    { id: "6", title: "Item 6" },
    { id: "7", title: "Item 7" },
    { id: "8", title: "Item 8" },
  ];

  // Render function for each item in the list
  const renderItem = ({ item }) => (
    <View style={{ padding: 16 }}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyFlatList;
