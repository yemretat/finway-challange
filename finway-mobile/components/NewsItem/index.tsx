import { NewsType } from "../../types/types"
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity,Image,View,Text} from 'react-native'
import styles from "./styles"
import moment from "moment"
import 'moment/locale/en-ca'
moment.locale('en-ca')

type NewsProps = {
    news: NewsType
}
function index(props:NewsProps) {
    const navigation = useNavigation()
    const onPress = () => {
       navigation.navigate("NewsDetail",{news:props.news})
       //console.log("NewsDetail")
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}> 
            <Image 
                style={styles.image}
                source={{
                    uri :props.news.urlToImage ? props.news.urlToImage :'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                }}
            />
            <View style={styles.miniContainer}>
                <Text style={{fontSize:12,color:'gray'}}>{props.news.title}</Text>
                <View style={styles.details}>
                    <Text style={{fontSize:6,color:'gray'}}>{props.news.author}</Text>
                    <Text style={{fontSize:6,color:'gray'}}>{moment(props.news.publishedAt).fromNow()}</Text>
                </View>
            </View>

        </TouchableOpacity>

    )

}
export default index