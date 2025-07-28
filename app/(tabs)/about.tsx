import { Linking, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  const currentYear = new Date().getFullYear()
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}> {currentYear} - Built with love by <Text onPress={() => Linking.openURL('https://github.com/kojobaffoe011')} style={styles.link}>buff</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#25292e',
  },
  text: {
    color: 'white'
  },
  link:{
    textDecorationLine: 'underline',
    fontWeight: '900'
  }
})
