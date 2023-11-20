import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function MainScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Time </Text>
      </View>
      <View>
        <TextInput>Date </TextInput>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#BFA878',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  text: {
    margin: 16,
    padding: 20,
    padding: 16,
    borderWidth: 2,
    borderColor: "red",
    color:'white'
  },
  
});

export default MainScreen;
