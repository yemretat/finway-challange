import { StyleSheet, Dimensions } from "react-native";

const {width , height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    detailContainer:{
        width:'85%',
        marginHorizontal:'7.5%',
        height:'72%',
        borderColor:'red',
        borderWidth:1.5,
        marginTop:height*0.04,
        borderRadius:20,
        flexDirection:'column',
        alignItems:'center',
        
    },
    image:{
        width:width*0.35,
        height:width*0.35,
        borderRadius:10,
        resizeMode:'stretch'
    },
    upperDetails:{
        width:'96%',
        marginHorizontal:'2%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:width*0.4
    },
    upperTextDetails:{
        flexDirection:'column',
        justifyContent:'space-between',
         //backgroundColor:'red',
        width:width*0.45,
        height:width*0.26
    },
    miniHeader:{marginBottom:4,fontWeight:'bold',fontSize:14}
})
export default styles