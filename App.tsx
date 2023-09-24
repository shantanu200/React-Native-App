import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from "./screens/Home/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
