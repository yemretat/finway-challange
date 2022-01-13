import React from "react";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { Dimensions, Text, View } from "react-native";
import News from "../Screens/News";
import NewsDetail from "../Screens/NewsDetail";

const { height } = Dimensions.get("window");

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsHome"
        component={News}
        options={{
          headerStyle: { backgroundColor: "#FF1616", height: height * 0.1 },
          headerTitle: () => (
            <HeaderTitle/>
          ),
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          headerBackTitleVisible: false,

          headerStyle: { backgroundColor: "#FF1616", height: height * 0.1 },
          headerTitle: () => (
            <HeaderDetailTitle/>
          ),
          headerLeft:() => (null)
        }}
      />
    </Stack.Navigator>
  );
}
function HeaderTitle(){
    return (
    <View style={{ backgroundColor: "white", borderRadius: 10 }}>
    <Text
      style={{
        paddingHorizontal: 20,
        paddingVertical: 7,
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
      }}
    >
      News
    </Text>
  </View>)
}
function HeaderDetailTitle(){
  return (
  <View style={{ backgroundColor: "white", borderRadius: 10 }}>
  <Text
    style={{
      paddingHorizontal: 20,
      paddingVertical: 7,
      fontSize: 20,
      fontWeight: "bold",
      color: "red",
    }}
  >
    News Detail
  </Text>
</View>)
}
export default function HomeNavigator() {
  return <MyStack />;
}
