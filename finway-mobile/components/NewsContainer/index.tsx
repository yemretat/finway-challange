import { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator,Text } from "react-native";
import styles from "./styles";
import { NewsType } from "../../types/types";
import NewsItem from "../NewsItem";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";

type newsContainerProps = {
  searchValue: string;
  sortParam: string;
  language: string;
};
function index(props: newsContainerProps) {
  const [news, setNews] = useState<NewsType[]>([]);
  const [totalDisplayed, setTotalDisplayed] = useState(5);
  const loadDataFromApi = () => {
    axios
      .get(
        `${baseURL}?language=${props.language}&sortBy=${props.sortParam}&totalDisplayed=${totalDisplayed}&q=${props.searchValue}`
      )
      .then((res) => {
        if (res.data.articles.length > 0) {
          setTotalDisplayed(totalDisplayed + 5);
          setNews(news.concat(res.data.articles));
        } else {
          setNews([]);
        }
      })
      .catch((error) => {
        console.log("The error is ", error);
      });
  };
  const loadDataFromApiDependency = (searchValue: string) => {
    setTotalDisplayed(5);
    axios
      .get(
        `${baseURL}?language=${props.language}&sortBy=${props.sortParam}&totalDisplayed=${totalDisplayed}&q=${searchValue}`
      ) // linki değiştir stateden kullan
      .then((res) => {
        if (res.data.articles.length > 0) {
          setNews(res.data.articles);
        } else {
          setNews([]);
        }
      })
      .catch((error) => {
        console.log("The error is ", error);
      });
  };

  useEffect(() => {
    setTotalDisplayed(5);
    console.log("did mount");
    loadDataFromApi();
  }, []);

  useEffect(() => {
    loadDataFromApiDependency(props.searchValue);
  }, [props.searchValue, props.language, props.sortParam]);
  return (
    <View style={styles.container}>
      {news.length != 0 ? (
        <FlatList
          data={news}
          renderItem={({ item }) => <NewsItem news={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0}
          onEndReached={loadDataFromApi}
        />
      ) : (
          <ActivityIndicator size="small" color="red" />
      )}
    </View>
  );
}
export default index;
