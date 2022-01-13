import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "../components/MyTabBar";
import HomeNavigator from "./HomeNavigator";
const Tab = createBottomTabNavigator();
function Main() {
  return (
    <Tab.Navigator
      tabBar={(props:any) => <MyTabBar {...props} />}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default Main
