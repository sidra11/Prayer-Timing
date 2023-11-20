import { StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrmaryButton";

function BottomScreen() {
  return (
    <View style={styles.container}>
      
       <PrimaryButton>Fajar</PrimaryButton> 
       <PrimaryButton>Dhura</PrimaryButton> 
       <PrimaryButton>Dhura</PrimaryButton> 
       <PrimaryButton>Dhura</PrimaryButton> 
       <PrimaryButton>Dhura</PrimaryButton> 
      
    </View>
  );
}
export default BottomScreen;
const styles = StyleSheet.create ({
container: {
    marginTop:12,
    

    

}
})