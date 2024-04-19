import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { ADD_TO_CART } from "./Constent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Action";
import { removeToCart } from "./Action";

function Product(props) {
  const productItems = { ...props.productItems };
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);

  const [isAdded, setisAdded] = useState(false);

  const handleAddToCart = (productItems) => {
    dispatch(addToCart(productItems));
  };

  const handleRemoveToCart = (productItems) => {
    dispatch(removeToCart(productItems.name));
  };

  useEffect(() => {
    let result = cartItems.filter((element) => {
      return element.name === productItems.name;
    });
    
    if (result.length) {
      setisAdded(true);
    } else {
      setisAdded(false);
    }
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.productNameStyle}>{productItems.name}</Text>
      <Text style={styles.productPriceStyle}>{productItems.price}</Text>
      <Image source={productItems.image} style={styles.image} />
      {isAdded ? (
        <Button title="Remove To Cart" onPress={handleRemoveToCart} />
      ) : (
        <Button title="Add To Cart" onPress={handleAddToCart} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderBottomColor: "orange",
    borderBottomWidth: 2,
    padding: 10,
    margin: 30,
  },
  productNameStyle: {
    fontSize: 24,
  },
  productPriceStyle: {
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default Product;
