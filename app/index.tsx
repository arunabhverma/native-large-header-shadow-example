import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

const Main = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
        }}
        style={{ width: "100%", aspectRatio: 1 }}
      />
      <Text style={{ color: "gray" }}>{"Main ".repeat(5000)}</Text>
    </ScrollView>
  );
};

export default Main;
