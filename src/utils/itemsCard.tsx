import { FlatList } from "react-native";
import CardItem from "../components/CardItem";
import { cardItem } from "../constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const ItemsCard = () => {
  const { selectedName } = useSelector((state: RootState) => state.changeType);
  return (
    <FlatList
      style={{
        marginTop: 15,
      }}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        margin: 10,
        columnGap: 10,
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
      data={cardItem[selectedName]}
      numColumns={2}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <CardItem item={item} />
      )}
    />
  );
};

export default ItemsCard;
