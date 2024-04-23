import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ingrediants from "../utils/Ingrediants";
import { cardInfo } from "../constants/constants";
import HeaderPage from "../components/HeaderPage";

type igredientsProps = {
  name: string;
  gram: number;
  percent: number;
}

interface Item {
  name: string;
  ingredients: igredientsProps[]
  details: string;
}

const CardPage = ({ route }: any) => {
  const windowWidth = Dimensions.get("window").width;
  const { name, type, image } = route.params;

  function findObjectByKeyAndName(key: string, name: string) {
    const category = cardInfo[key];
    if (!category) {
      return null;
    }

    return category.find((item: Item) => item.name.toLowerCase() === name.toLowerCase()) || null;
  }

  const data = findObjectByKeyAndName(type, name);
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.imageContainer}>
        {/* Back arrow and title */}
        <HeaderPage title={data!.name} />
        <View style={{ alignItems: "center", margin: 10, padding: 10 }}>
          <Image
          resizeMode="cover"
            style={[styles.image, { width: windowWidth - 50 }]}
            source={image}
          />
        </View>
      </View>
      {/* Ingredients */}
      <View style={styles.ingredients}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Ingredients
        </Text>
        <FlatList
          horizontal={true}
          data={data?.ingredients}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Ingrediants item={item} />}
        />
        {/* Details */}
        <View style={styles.details}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Details
          </Text>
          <Text>
            {data?.details}
          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  details: {
    gap: 15,
  },
  ingredients: {
    gap: 30,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#f5f6fe",
    borderRadius: 20,
  },
  back: {
    height: 40,
    width: 40,
  },
  imageContainer: {
    backgroundColor: "#ffe6cc",
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
  },
  image: {
    // resizeMode: "cover",
    height: 300,
    borderRadius: 20,
  },
});
export default CardPage;
