import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function ApiData() {
  const [data, setData] = useState(undefined);
  const getAPIdata = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    try {
      let result = await fetch(url);
      if (result.ok) {
        result = await result.json();
        setData(result);
      } else {
        console.error(
          "Failed to fetch data:",
          result.status,
          result.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <View>
      <Text>Api Call</Text>
      {data ? (
        <View>
          <Text>{data.id}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default ApiData;
