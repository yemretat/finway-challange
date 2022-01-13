import { StyleSheet,Dimensions } from "react-native";

const {width,height} =Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        height:height*0.06,
        borderColor:'red',
        borderWidth:0.6,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        marginTop:height*0.025
    },
    textInput:{
        flex:1,
        fontSize:14,
        marginLeft:width*0.02,
        color:'gray',
        
    },
    icons:{
        marginLeft:width*0.02
    },

})

export default styles;
