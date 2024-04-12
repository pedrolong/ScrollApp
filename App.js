import { View } from "react-native";
import { styles } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <text>Hello</text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
});
