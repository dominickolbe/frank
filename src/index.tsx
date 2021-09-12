import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const App = () => (
  <View style={styles.container}>
    <Text>frank.</Text>
    <StatusBar animated translucent={true} />
  </View>
);
