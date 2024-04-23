import { StyleSheet, Text, View } from "react-native";
type Props = {
  item: {
    name: string;
    gram: number;
    percent: number;
  };
};

const Ingrediants = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
      }}>{item.name}</Text>
      <Text>{item.gram} Gram</Text>
      <View style={styles.circle}>
        <Text style={{
            fontWeight: '900',
            fontSize: 18,
            textAlign: 'center',
        }}>{item.percent}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderWidth: 1,
    width: 90,
    marginRight: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'aqua',
    justifyContent: 'center',
    // padding: 10,
    width: 60,
    height: 60,
    borderRadius: 100,
  }
});

export default Ingrediants;
