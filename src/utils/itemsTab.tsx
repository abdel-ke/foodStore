import { FlatList, View } from "react-native"
import { data } from "../constants/constants"
import ItemTab from "../components/ItemTab"

const ItemsTab = () => {
    return (
        <View style={{ height: 120 }}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ItemTab
              item={item}
            />
          )}
        />
      </View>
    )
}

export default ItemsTab