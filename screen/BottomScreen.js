import { StyleSheet,  } from "react-native";
import PrimaryButton from "../components/PrmaryButton";
import PrayerTimesList from "../components/PrayerTimesList";



function BottomScreen() {
  return (
    <PrayerTimesList></PrayerTimesList>
  );
}
export default BottomScreen;
const styles = StyleSheet.create ({
container: {
    marginTop:12,
    

    

}
})