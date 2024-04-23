import { Image, StyleSheet, View } from "react-native";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.appBar}
        source={require("../../assets/icons/menu.png")}
      />
      <Image
        style={styles.appBar}
        source={require("../../assets/icons/user.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
  },
  appBar: {
    resizeMode: "stretch",
    width: 30,
    height: 30,
  },
});
export default AppBar;
