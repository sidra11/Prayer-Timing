import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

function TopScreen(props) {
  return (
    <View>
      <Text style={styles.text}>{moment().format("DD-MMM-YYYY")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    marginTop: 100,
    padding: 10,
    borderWidth: 2,
    borderColor: "red",
    color: "white",
    fontSize:20,
  },
});

export default TopScreen;
