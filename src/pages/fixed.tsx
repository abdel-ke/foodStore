import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Fixed = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <Text>Fixed</Text>
      <View
        style={{
          backgroundColor: "lightblue",
          height: 50,

          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",

          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 10,
          width: "50%",
          marginHorizontal: "25%",
          marginBottom: 25,
          borderRadius: 10,
        }}
      >
        <Text>F1</Text>
        <Text>F2</Text>
        <Text>F3</Text>
      </View>
      <FlatList
        data={Array.from({ length: 100 }, (_, i) => i)}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item.toString()}
      />
    </SafeAreaView>
  );
};

export default Fixed;
