import { FlatList, View } from "react-native";

import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function TabOneScreen() {
  return (
    // flat list allows us to scroll items

    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      // for container styles and x-axis gap
      contentContainerStyle={{ gap: 10, padding: 10 }}
      // for column styles and y-axis gap
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
