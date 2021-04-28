import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class RenderCom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardContainer}
        onPress={() => {
          this.setState({
            currentIndex:
              this.state.currentIndex == null ? this.props.index : null,
          });
        }}
      >
        <Text style={{ alignSelf: "center" }}>{this.props.item.country}</Text>
        {this.props.index == this.state.currentIndex && (
          <View style={{ padding: 10 }}>
            <Text>Cases: {this.props.item.cases}</Text>
            <Text>todayCases: {this.props.item.todayCases}</Text>
            <Text>deaths: {this.props.item.deaths}</Text>
            <Text>todayDeaths :{this.props.item.todayDeaths}</Text>
            <Text>recovered :{this.props.item.recovered}</Text>
            <Text>critical :{this.props.item.critical}</Text>
            <Text>
              casesPerOneMillion :{this.props.item.casesPerOneMillion}
            </Text>
            <Text>
              deathsPerOneMillion :{this.props.item.deathsPerOneMillion}
            </Text>
            <Text>
              testsPerOneMillion :{this.props.item.testsPerOneMillion}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexGrow: 1,
    paddingTop: 40,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default RenderCom;
