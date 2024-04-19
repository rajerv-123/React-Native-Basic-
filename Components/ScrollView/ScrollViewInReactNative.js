// import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

// export default function ScrollViewInReactNative() {
//   const user = [
//     {
//       id: 1,
//       name: "Rajeev",
//     },
//     {
//       id: 2,
//       name: "Manish",
//     },
//     {
//       id: 3,
//       name: "Rohit",
//     },
//     {
//       id: 4,
//       name: "Rohit",
//     },
//     {
//       id: 5,
//       name: "Rohit",
//     },
//     {
//       id: 6,
//       name: "Rohit",
//     },
//     {
//       id: 7,
//       name: "Rohit",
//     },
//     {
//       id: 8,
//       name: "Rohit",
//     },
//     {
//       id: 9,
//       name: "Rohit",
//     },
//     {
//       id: 10,
//       name: "Rohit",
//     },
//   ];
//   return (
//     <View style={styles.container}>
//       <Text>How to Display List in reactNative</Text>
//       <FlatList
//         data={user}
//         renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
//         keyExtractor={(item) => item.id}
//       />
//       <ScrollView>
//         {user.map((item) => (
//           <Text style={styles.item}>{item.name}</Text>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     fontSize: 24,
//     padding: 10,
//     color: "#fff",
//     backgroundColor: "blue",
//     borderWidth: 1,
//     margin: 10,
//   },
// });
