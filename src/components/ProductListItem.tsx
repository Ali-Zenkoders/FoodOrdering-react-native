import { StyleSheet, Text, Image, Pressable } from "react-native";

import Colors from "@/src/constants/Colors";
import { Product } from "../types";
import { Link, useSegments, type Href } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductLIstItemProps = {
  product: Product;
};

type ProductLinkPath = `/(user)/menu/${number}` | `/(admin)/menu/${number}`;

const ProductListItem = ({ product }: ProductLIstItemProps) => {
  // segment is just like pathname but it already split in array
  const [first] = useSegments();
  console.log("segment: ", first);

  if (!first) return;

  // ("/" + first + "/menu/" + product.id) as Href<ProductLinkPath>

  return (
    // View is just like div in web but View does not support press event unlike Pressable

    <Link
      href={
        { pathname: `${first}/menu/[id]`, params: { id: product.id } } as Href<{
          pathname: string;
          params: Record<string, string>;
        }>
      }
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          // image modes
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    justifyContent: "space-between",
    maxWidth: "50%",
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
