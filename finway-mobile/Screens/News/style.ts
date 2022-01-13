import { StyleSheet,Dimensions } from "react-native";
const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:width*0.04
    }

})
export default styles
