import React from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import styles from "./styles";
type CategoryProps = {
  itemNames: string[];
  onPress: (value: string) => void;
  selectedItem: string;
  categoryName: string;
};

function CategoryFilter(props: CategoryProps) {
  return (
    <View style={styles.mainView}>
      <Text style={styles.categoryText}>Select the {props.categoryName}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={true}
        horizontal={true}
        style={styles.scrollView}
      >
        {props.itemNames.map((item: string) => (
          <TouchableOpacity
            key={item}
            onPress={() => props.onPress(item)}
            style={[
              styles.center,
              props.selectedItem == item ? styles.active : styles.unactive,
            ]}
          >
            <Text style={{fontSize:11,fontWeight:'bold'}}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
export default CategoryFilter;
