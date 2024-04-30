import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";

const product = products[1];

export default function TabOneScreen() {
  return (
    // view is just like div in web
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    // we use aspect ratio in replace of height
    aspectRatio: 1,
  },
});
