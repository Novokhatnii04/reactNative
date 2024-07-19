import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ marginLeft: 10, fontSize: 18 }}>Sign In</Text>
    </View>
  );
};

export default CustomHeader;
