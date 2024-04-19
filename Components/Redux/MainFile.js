import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Product from "./Product";
import img from "../../assets/cell.png";
import Header from "./Header";

function MainFile() {
  const products = [
    {
      name: "Sony",
      price: 30000,
      image: img, // Use the imported image directly
    },
    {
      name: "Samsung",
      price: 40000,
      image: img, // Use the imported image directly
    },
    {
      name: "Vivo",
      price: 60000,
      image: img, // Use the imported image directly
    },
    {
      name: "Apple",
      price: 80000,
      image: img, // Use the imported image directly
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ position: "fixed" }}>
          <Header />
        </View>
        <View style={styles.productImageStyle}> 
          {products.map((productItems) => (
            <Product productItems={productItems} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productNameStyle: {
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  productImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default MainFile;
