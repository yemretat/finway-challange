import { StyleSheet,Dimensions } from "react-native";
const {width,height} = Dimensions.get('window')
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:height*0.09,
        borderColor:'red',
        borderWidth:0.7,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:height*0.007,
    },
    image:{
        width:height*0.07,
        height:height*0.07,
        resizeMode: "stretch",
        borderRadius:10,
        marginLeft:width*0.015
    },
    miniContainer:{
        flexDirection:'column',
        width:width*0.7,
        height:height*0.07,
        //backgroundColor:'red',
        justifyContent:'space-between',
        marginLeft:width*0.015
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-between',
    }



})
export default styles