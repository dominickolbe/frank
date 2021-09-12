import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <View style={styles.container}>
      <Text>frank.</Text>
    </View>
    <StatusBar animated translucent={true} />
  </SafeAreaProvider>
);
