import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TabButton from "../TabButton"

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.bottomNav}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = //reading the label
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index; 

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (

            <View key={index}>
            <TabButton onPress={onPress} />
            </View>
      
        );
      })}
    </View>
  );
}
export default MyTabBar