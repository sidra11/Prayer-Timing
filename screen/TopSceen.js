
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
function TopScreen() {
    return (
      
        <View>
          <Text style={styles.text}>Location </Text>
        </View>

    );
  }

  const styles = StyleSheet.create({

    text: {
      margin: 10,
      marginTop:100,
      padding: 10,
      borderWidth: 2,
      borderColor: "red",
      color:'white'
    },
    
  });
  
  export default TopScreen;