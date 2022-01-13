import {View,TextInput, TouchableOpacity,Text} from 'react-native'
import {Feather} from "@expo/vector-icons"

import styles from './styles'

type  SearchBarProps = {
    setSearchValue : (search:string) => void;
    searchValue : string
}
function index(props:SearchBarProps) {
    return (
        <View style={styles.container}>
            <Feather style={styles.icons} name="search" size={20} color="gray"    />
            <TextInput 
                testID="Search.Bar"
                style={styles.textInput}
                placeholderTextColor="gray"
                placeholder="Search News ..."
                onChangeText={(text) => props.setSearchValue(text)}
            />
        </View>
    )
}
export default index


