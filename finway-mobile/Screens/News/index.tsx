import React ,{useState,useEffect} from "react"
import { View } from 'react-native';
import { languageOptions, sortByOptions } from '../../assets/data';
import CategoryFilter from '../../components/CategoryFilter';
import styles from "./style"
import SearchBar from "../../components/SearchBar"
import NewsItem from "../../components/NewsItem"
import NewsContainer from "../../components/NewsContainer"
export default function App() {
  const [language,setLanguage] = useState("all")
  const [sortParam,setSortParam] = useState("publishedAt")
  const [searchValue,setSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <CategoryFilter categoryName={"Language"} itemNames={languageOptions} onPress={setLanguage} selectedItem={language}></CategoryFilter>
      <CategoryFilter categoryName={"Sort Parameter"} itemNames={sortByOptions} onPress={setSortParam} selectedItem={sortParam}></CategoryFilter>
      <NewsContainer language={language} sortParam={sortParam} searchValue={searchValue} />
    </View>
  );
}

