import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "@/src/constants/Colors";
import { Product } from "../types";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductLIstItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductLIstItemProps) => {
  return (
    // view is just like div in web
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

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
