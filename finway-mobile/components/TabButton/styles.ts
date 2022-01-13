import { StyleSheet,Dimensions } from "react-native";

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
    tabBarButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-height*0.07
    }
})

export default styles;