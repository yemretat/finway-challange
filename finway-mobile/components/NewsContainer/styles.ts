import { StyleSheet,Dimensions } from "react-native";
const {width,height} =Dimensions.get('window')
const styles = StyleSheet.create({

    container:{
        height:height*0.5,
        marginTop:height*0.01,

    }

})
export default styles