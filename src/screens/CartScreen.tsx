import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import useCartStore from "../stores/cartStore";

export default function CartScreen() {
  const { items, removeItem, clearCart } = useCartStore();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Cart ({items.length})
      </Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
            <Text>{item.title}</Text>
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />

      {items.length > 0 && (
        <Button title="Clear Cart" onPress={clearCart} />
      )}
    </View>
  );
}
