import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigators/Main";

export default function App() {
  return (
    <NavigationContainer >
      <RootNavigator />
    </NavigationContainer>
  );
}
