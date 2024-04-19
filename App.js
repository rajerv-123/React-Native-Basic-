import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Components/Authentication/SignUp";
import SignIn from "./Components/Authentication/SignIn";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import reduxStore from "./Components/Redux/ReduxStore";
const Stack = createNativeStackNavigator();

// const Tab = createMaterialTopTabNavigator();

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

// function App() {
//   return (
//     //Example of tab navigation
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="SignUp" component={SignUp} />
//         <Tab.Screen name="SignIn" component={SignIn} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// function App() {
//   return (
//     //Example of tab navigation
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="SignUp" component={SignUp} />
//         <Tab.Screen name="SignIn" component={SignIn} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

function App() {
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
          {/* <Stack.Screen
          name="ListOfDataFeatching"
          component={ListOfDataFeatching}
        /> */}
          {/* <Stack.Screen name="MyFlatList" component={MyFlatList} /> */}
          {/* <Stack.Screen name="MainFile" component={MainFile} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
