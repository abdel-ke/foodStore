import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { SetStateAction } from "react";
import { cardItem } from "../constants/constants";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { Icon } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { decrement, deleteItem, increment } from "../state/items/itemsSlice";

type Props = {
  item: {
    name: string;
    type: "Donuts" | "Burger" | "Smothie" | "PanCake" | "Pizza";
    amount: Double;
    count: number
  };
};

const CheckoutItem = ({ item }: Props) => {
  const image = cardItem[item.type].find((e) => e.name == item.name);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image?.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.type}</Text>
        <Text style={{ fontWeight: "900" }}>${item.amount}</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <TouchableHighlight
            style={styles.case}
            underlayColor="ghostwhite"
            onPress={() => {
              // if (count > 1) {
              //   setCount(count - 1);
              //   setTotal((prev) => prev - item.amount);
              // }
              dispatch(decrement(item))
            }}
          >
            <Text style={styles.opp}>-</Text>
          </TouchableHighlight>
          <View style={styles.viewCount}>
            <Text style={styles.count}>{item.count}</Text>
          </View>
          <TouchableHighlight
            style={styles.case}
            underlayColor="ghostwhite"
            onPress={() => {
              // setCount(count + 1);
              // setTotal((prev) => prev + item.amount);
              dispatch(increment(item))
            }}
          >
            <Text style={styles.opp}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.totalAnsDelete}>
        {item.count > 1 && (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              flex: 1,
              textAlign: "right",
              paddingVertical: 5,
            }}
          >
            ${(item.count * item.amount).toFixed(2)}
          </Text>
        )}
        <TouchableHighlight
          underlayColor="lightsalmon"
          style={styles.delete}
          onPress={() => dispatch(deleteItem(item))}
        >
          <Icon color={"red"} name="delete" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  delete: {
    height: "100%",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
  },
  totalAnsDelete: {
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    gap: 10,
  },
  viewCount: {
    height: 30,
    width: 50,
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontWeight: "bold",
    fontSize: 18,
  },
  case: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: "grey",
  },
  opp: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  details: {},
});

export default CheckoutItem;
