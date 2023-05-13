import { Pressable, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import products from "../data/products";

const ProductsScreens = ({ navigation }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Details", item.id)}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreens;

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
