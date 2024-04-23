import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderPage from "../components/HeaderPage";
import { RootState } from "../state/store";
import CheckoutItem from "../components/CheckoutItem";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { CardItemScreenNavigationProp } from "../App";

const ViewCart = () => {
  const navigation = useNavigation<CardItemScreenNavigationProp>();
  const { addItem } = useSelector((state: RootState) => state.AddedItems);
  var total = addItem.reduce((a, b) => a + b.amount * b.count, 0).toFixed(2);
  useEffect(() => {
    total = addItem.reduce((a, b) => a + b.amount * b.count, 0).toFixed(2);
    if (total === "0.00") navigation.pop();
  }, [addItem]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderPage title="Cart" />
      <FlatList
        data={addItem}
        keyExtractor={(item) => `${item.name} ${item.type}`}
        renderItem={({ item }) => {
          return <CheckoutItem item={item} />;
        }}
      />
      <View
        style={{
          height: 50,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: "15%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Total:</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {/* ${addItem.reduce((a, b) => a + b.amount * b.count, 0).toFixed(2)} */}
          ${total}
        </Text>
      </View>

      <View
        style={{
          height: 50,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableHighlight
          underlayColor="mediumaquamarine"
          style={{
            backgroundColor: "aquamarine",
            borderRadius: 10,
            height: 50,
            width: "75%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
          onPress={() => console.log("clicked")}
        >
          <Text>CheckOut</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default ViewCart;
