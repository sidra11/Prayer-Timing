
import { StyleSheet, Text, View } from "react-native";

function TopScreen(props) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
 
  const formattedDate = currentDate.toLocaleDateString();
  console.log(currentDate);

    return (
        <View>
          
          <Text style={styles.text} >{formattedDate}</Text>
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