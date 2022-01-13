import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, Dimensions, View } from "react-native";
import styles from "./styles";
import { ButtonImage } from "../../assets/images/svgimages";

var { height } = Dimensions.get("window");

type TabButtonProps = {
  onPress: () => void;
};

function index({ onPress }: TabButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabBarButton}>
      <MaterialCommunityIcons color="#efefef" name="hexagon" size={height * 0.135} />
      <View style={{ position: "absolute" }}>
        <ButtonImage height={height * 0.075} width={height * 0.075} />
      </View>
    </TouchableOpacity>
  );
}

export default index;
