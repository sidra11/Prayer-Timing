import { Pressable, View, Text, StyleSheet } from "react-native";
function PrayerItem(prayer, time, onSelect) {
  return(
  <Pressable onPress={onSelect}>
    <View>
      <Image source={{ uri: prayer.imageUri }} />
      <View>
        <Text>{prayer.name}</Text>
        <Text>{prayer.time}</Text>
      </View>
    </View>
  </Pressable>);
}

export default PrayerItem;

const styles= StyleSheet.create({

});
