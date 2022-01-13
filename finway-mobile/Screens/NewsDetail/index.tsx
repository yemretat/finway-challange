import { useState } from "react";
import { NewsType } from "../../types/types";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import moment from "moment";
import "moment/locale/en-ca";
moment.locale("en-ca");
function index(props) {
  const [news, setNews] = useState<NewsType>(props.route.params.news);
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.upperDetails}>
          <View style={styles.upperTextDetails}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {news.title}
            </Text>
            <View>
              <Text style={{ fontSize: 6 }}>{news.author}</Text>
              <Text style={{ fontSize: 6, color: "gray" }}>
                {moment(news.publishedAt).fromNow()}
              </Text>
            </View>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: news.urlToImage ? news.urlToImage: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
            }}
          />
        </View>
        <View style={{paddingHorizontal:'2%',marginTop:15}}>
            <Text style={styles.miniHeader}>Description:</Text>
            <Text>{news.description}</Text>
            <Text style={[styles.miniHeader,{marginTop:14}]}>Content:</Text>
            <Text>{news.content}</Text>

        </View>
      </View>
    </View>
  );
}
export default index;
