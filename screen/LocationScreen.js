import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import LocationPicker from "../components/LocationPicker";
import { FontAwesome5 } from "@expo/vector-icons";

function LocationScreen() {
  return (
    <View style={styles.container}>
      <View>
        <LocationPicker />
        <FontAwesome5 name="mosque" size={40} color="black" />
        <Text style={styles.text}>Current Prayer Time</Text>
        <Text>Next Prayer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 50,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#BFA878",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  text: {
    margin: 16,
    padding: 20,
    padding: 16,
    color: "white",
  },
});

export default LocationScreen;
