import { StyleSheet, Text, View } from "react-native";
import AddedItems from "../utils/selectedItems";
import ItemsTab from "../utils/itemsTab";
import ItemsCard from "../utils/itemsCard";

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
          }}
        >
          I want to{" "}
        </Text>
        <Text
          style={{
            fontWeight: "900",
            fontSize: 22,
          }}
        >
          Eat
        </Text>
      </View>
      {/* rows  */}
      <ItemsTab/>
      {/* grid */}
      <ItemsCard/>
      {/* added items */}
      <AddedItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    margin: 10,
  },
});

export default HomePage;
