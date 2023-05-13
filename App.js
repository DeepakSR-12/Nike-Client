import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View, FlatList, Text } from "react-native";
import products from "./src/data/products";
import ProductScreens from "./src/screens/ProductScreens";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreens /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
