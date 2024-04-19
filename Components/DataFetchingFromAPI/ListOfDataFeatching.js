import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

function ListOfDataFetching() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiListDataFetching = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("HTTP error: ");
      }
      let result = await response.json();
      console.log(result);
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    apiListDataFetching();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>List of Posts</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
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
  textStyle: {
    fontSize: 20,
    marginBottom: 20,
  },
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  postTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ListOfDataFetching;
