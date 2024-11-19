import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { NavigationContainer } from "@react-navigation/native";
export default function RootLayout() {
  return (
    <Provider store={store}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="components/SearchPage" options={{ headerShown: false }} />
      <Stack.Screen name="components/addToCart" options={{ headerShown: false }} />
      <Stack.Screen name="myStore" options={{ headerShown: false }} />
    </Stack>
    </Provider>
  );
}
