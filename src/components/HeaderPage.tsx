import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CardItemScreenNavigationProp } from "../App";

type Props = {
  title: string;
};

const HeaderPage = ({ title }: Props) => {
  const navigation = useNavigation<CardItemScreenNavigationProp>();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <TouchableWithoutFeedback onPress={() => navigation.pop()}>
        <Image
          style={styles.back}
          source={require("../../assets/icons/back.png")}
        />
      </TouchableWithoutFeedback>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    height: 40,
    width: 40,
  },
});

export default HeaderPage;
