import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hi About!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#25617e'
  },
  text: {
    color: 'white'
  }
})
