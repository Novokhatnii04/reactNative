import React from "react";
import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import { WelcomeDataItem, welcomeData } from "../../../resources/welcomeData";
import WelcomeCard from "./WelcomeCard";

const CardsWrapper = () => {
  const evenItems = welcomeData.filter((el) => el.id % 2 === 0);
  const oddItems = welcomeData.filter((el) => el.id % 2 !== 0);

  return (
    <ScrollView style={styles.list}>
      <View style={styles.content}>
        <View style={styles.leftBlock}>
          {oddItems.map((el: WelcomeDataItem) => (
            <WelcomeCard key={el.id} data={el} />
          ))}
        </View>
        <View style={styles.rightBlock}>
          {evenItems.map((el: WelcomeDataItem) => (
            <WelcomeCard key={el.id} data={el} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    gap: 16,
    width: "100%",
  },
  content: {
    width: "100%",
    marginHorizontal: "auto",
    alignContent: "center",
    justifyContent: "center",
    height: 514,
    gap: 16,
    marginTop: 12,
    flexDirection: "row",
  },
  leftBlock: {
    flexDirection: "column",
    gap: 16,
  },
  rightBlock: {
    flexDirection: "column",
    gap: 16,
    marginTop: "auto",
  },
});

export default CardsWrapper;
