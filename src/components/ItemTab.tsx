import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { changeType } from "../state/type/typeSlice";

type ItemProps = {
  item: {
    name: "Donuts" | "Burger" | "Smothie" | "PanCake" | "Pizza";
    image: any;
    imageSelected: any;
  };
};

const ItemTab = ({ item }: ItemProps) => {
  const { selectedName } = useSelector((state: RootState) => state.changeType);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <TouchableWithoutFeedback
      onPress={() => dispatch(changeType({ selectedName: item.name }))}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: 10,
          height: 120,
        }}
      >
        <View
          style={[
            styles.imageBorder,
            { borderWidth: selectedName == item.name ? 1 : 0 },
          ]}
        >
          <Image
            style={styles.image}
            source={selectedName == item.name ? item.imageSelected : item.image}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageBorder: {
    borderColor: "black",
    padding: 15,
    borderRadius: 25,
  },
  image: {
    resizeMode: "stretch",
    width: 35,
    height: 35,
  },
});

export default ItemTab;
