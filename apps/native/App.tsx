import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GradientText } from "universal-text-gradient";

export default function Native() {
  return (
    <View style={styles.container}>
      <GradientText
        style={{ fontSize: 32, fontWeight: "700" }}
        colors={["#4ebcf4", "#6b40ba"]}
        direction="down"
      >
        Universal Text Gradient
      </GradientText>
      <Text style={{ fontSize: 55, fontWeight: "700" }}>🌌</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c0c",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
