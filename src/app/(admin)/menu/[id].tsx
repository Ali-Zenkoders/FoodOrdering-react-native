import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { PizzaSize } from "@/src/types";
import { useCart } from "@/src/providers/CartProvider";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const product = products.find((p) => p.id.toString() === id);

  const handleCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
    // console.warn("Adding to card: selected size: ", selectedSize);
  };

  if (!product) {
    return <Text>Product not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      {/* this is another way to change screen configuration in this way we don't need to add name because we already in current screen also we have other variable access in this case id */}
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image }}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
