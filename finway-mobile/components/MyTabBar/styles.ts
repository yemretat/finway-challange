import { StyleSheet,Dimensions } from "react-native";

var{height } = Dimensions.get('window')

const styles = StyleSheet.create({
    bottomNav:{
        flexDirection:'row',
        height:height*0.092,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0
    }
})

export default styles