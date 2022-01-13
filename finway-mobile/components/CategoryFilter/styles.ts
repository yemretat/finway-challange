import { StyleSheet,Dimensions } from "react-native";
const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({
    center:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:width*0.22,
        height : height*0.032,
        borderRadius:10,
        marginRight:width*0.022,
    },
    active: {
        borderColor: "#FF1616",
        borderWidth: 1,
        backgroundColor:'rgba(255, 22, 22,0.1)'
      },
    unactive:{
        borderColor: "#FF1616",
        borderWidth: 0.8,
    },
    scrollView :{
    backgroundColor:'#fff',
    height:height*0.05,
    marginTop:height*0.02,
    },
    categoryText:{
        fontSize:12,
        fontWeight:'bold',
        color:'gray'
    },
    mainView:{
        marginTop:height*0.01,
    }

})
export default styles;