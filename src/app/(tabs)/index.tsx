import { View } from "react-native";

import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function TabOneScreen() {
  return (
    <View>
      {products.map((product, index) => (
        <ProductListItem key={index} product={product} />
      ))}
    </View>
  );
}
