import { FlatList,View,Text, StyleSheet } from "react-native";
import PrayerItem from "./PrayerItem";
function PrayerTimesList({ locations }) {
  if (!locations || locations.length === 0) {
    return (
      <View style={styles.backContainer}>
        <Text style={styles.backText}>No avilabile</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={locations}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PrayerItem prayer={item} />}
    ></FlatList>
  );
}

export default PrayerTimesList;

const styles = StyleSheet.create({
    backContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    backText:{
        color:'white',
        fontSize:16,
    }

})
