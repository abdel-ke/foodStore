import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { deleteOrAddObject } from "../state/heart/heartSlice";
import { addItemIfNotExist } from "../state/items/itemsSlice";
import { useNavigation } from "@react-navigation/native";
import { CardItemScreenNavigationProp } from "../App";

type Props = {
  item: ItemProp;
};

type ItemProp = {
  name: string;
  image: ImageSourcePropType;
  amount: Double;
  title: string;
  type: "Donuts" | "Burger" | "Smothie" | "PanCake" | "Pizza";
  count: number;
};

const CardItem = ({ item }: Props) => {
  const { heart } = useSelector((state: RootState) => state.heart);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<CardItemScreenNavigationProp>();
  const windowWidth = Dimensions.get('window').width;
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("cardPage", {
          name: item.name,
          type: item.type,
          image: item.image,
        })
      }
    >
      <View style={[styles.grid, {
        width: (windowWidth / 2 ) - 20
      }]}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.amount}>
            <Text>${item.amount}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.image} source={item.image} resizeMode="cover" />
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.name}</Text>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.row}>
          <TouchableWithoutFeedback
            onPress={() => {
              dispatch(
                deleteOrAddObject({
                  name: item.name,
                  type: item.type,
                  hearted: true,
                })
              );
              // setSelected(!selected);
            }}
          >
            <Image
              style={styles.imageHearth}
              source={
                heart.find((e) => e.name == item.name && e.type == item.type)
                  ? require("../../assets/icons/red_heart.png")
                  : require("../../assets/icons/heart.png")
              }
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              dispatch(addItemIfNotExist(item));
            }}
          >
            <Text style={styles.add}>Add</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  add: {
    fontWeight: "900",
    textDecorationLine: "underline",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    padding: 10,
  },
  amount: {
    textAlign: "right",
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imageHearth: {
    resizeMode: "stretch",
    width: 25,
    height: 25,
  },
  grid: {
    backgroundColor: "#f0f1fe",
    borderRadius: 20,
  },
  text: {
    marginTop: 30,
  },
  image: {
    height: 150,
    width: 150,
    margin: 10,
    borderRadius: 20,
  },
});

export default CardItem;
