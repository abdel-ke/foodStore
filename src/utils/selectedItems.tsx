import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useNavigation } from "@react-navigation/native";
import { CardItemScreenNavigationProp } from "../App";

type AddItemsProps = {
  name: string;
  type: string;
  amount: Double;
};

const totalAmount = (addItem: AddItemsProps[]) => {
  var res = 0;
  addItem.forEach((item) => (res += item.amount));
  return res;
};

const AddedItems = () => {
  const { addItem } = useSelector((state: RootState) => state.AddedItems);
  const navigation = useNavigation<CardItemScreenNavigationProp>();
  if (!addItem.length) return null;
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "900",
          }}
        >
          {addItem.length} Item{addItem.length != 1 && "s"} | $
          {/* {totalAmount(addItem)} */}
          {addItem.reduce((a, b) => a + b.amount * b.count, 0).toFixed(2)}
        </Text>
        <Text>Delivery Charges Included</Text>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.push("viewCart");
        }}
      >
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: "underline",
            fontWeight: "900",
          }}
        >
          View Cart
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
  },
});

export default AddedItems;
