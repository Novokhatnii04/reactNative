import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const WelcomeCard = ({ data }: { data: any }) => {
  return (
    <View style={styles.card}>
      {data.id === 1 ? (
        <View style={styles.image}>{data.images}</View>
      ) : (
        <View style={styles.imageContainer}>
          <View style={{ marginRight: -10 }}>{data.images[0]}</View>
          <View style={{ zIndex: 2 }}>{data.images[1]}</View>
          <View style={{ marginLeft: -10 }}>{data.images[2]}</View>
        </View>
      )}
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: 164,
    height: 136,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    color: "#606773",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});

export default WelcomeCard;
