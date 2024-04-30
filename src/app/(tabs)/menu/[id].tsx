import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import Button from "@/src/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const product = products.find((p) => p.id.toString() === id);

  const handleCart = () => {
    console.warn("Adding to card: selected size: ", selectedSize);
  };

  if (!product) {
    return <Text>Product not found.</Text>;
  }

  return (
    <View style={styles.container}>
      {/* this is another way to change screen configuration in this way we don't need to add name because we already in current screen also we have other variable access in this case id */}
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image }}
        resizeMode="contain"
        style={styles.image}
      />
      <Text>Select Sizes</Text>
      <View style={styles.sizes}>
        {sizes.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedSize(item)}
            style={[
              styles.size,
              {
                backgroundColor: item === selectedSize ? "gainsboro" : "white",
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: item === selectedSize ? "black" : "gray" },
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to Cart" onPress={handleCart} />
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
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    // margin vertical is for y axis margin mean top & bottom
    marginVertical: 10,
  },
  size: {
    borderRadius: 25,
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
