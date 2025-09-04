import React from "react";
import { FlatList, View, Text, Button } from "react-native";
import useCartStore from "../stores/cartStore";

const PRODUCTS = Array.from({ length: 5000 }).map((_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
}));

export default function ProductListScreen() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ddd" }}>
          <Text>{item.title}</Text>
          <Button title="Add to Cart" onPress={() => addItem(item)} />
        </View>
      )}
      getItemLayout={(_, index) => ({
        length: 60,
        offset: 60 * index,
        index,
      })}
      windowSize={10}
      initialNumToRender={20}
    />
  );
}
