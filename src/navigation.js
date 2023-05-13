import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreens from "./screens/ProductsScreens";
import ShoppingCart from "./screens/ShoppingCart";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { Pressable, Text } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreens}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>10</Text>
              </Pressable>
            ),
            headerLeft: () => (
              <MaterialCommunityIcons
                name="truck-delivery"
                size={22}
                color="gray"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
