import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  RefreshControl,
} from "react-native";
import RenderCom from "../Components/RenderCom";

const CovidData = (props) => {
  const [covidData, setcovidData] = useState([]);

  const [refresh, setrefresh] = useState(false);
  const ITEM_HEIGHT = 40;

  const loadData = () => {
    setrefresh(true);
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setcovidData(data);
        setrefresh(false);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <FlatList
        data={covidData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <RenderCom item={item} index={index} />
        )}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={loadData} />
        }
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexGrow: 1,
    paddingTop: 40,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default CovidData;
