import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./pages/homePage";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import CardPage from "./pages/cardPage";
import { Provider } from "react-redux";
import { store } from "./state/store";
import ViewCart from "./pages/viewCart";

export type RootStackParamList = {
  home: undefined;
  cardPage: { name: string; type: string; image: any };
  viewCart: undefined,
};

export type CardItemScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "cardPage",
  "viewCart"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={HomePage} />
          <Stack.Screen name="cardPage" component={CardPage} />
          <Stack.Screen name="viewCart" component={ViewCart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
