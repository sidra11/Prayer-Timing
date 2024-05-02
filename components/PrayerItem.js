import { Pressable, View, Text, StyleSheet } from "react-native";
import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
  Prayer,
  Qibla,
} from "adhan";
import moment from "moment-timezone";
import PrimaryButton from "./PrmaryButton";
import { getAddress } from "../util/location";
const locations = [
  {
    key: 1,
    label: 'Jakarta',
    coord: [6.1751, 106.8650]
  },
  {
    key: 2,
    label: 'Depok',
    coord: [6.4025, 106.7942]
  },
  {
    key: 3,
    label: 'Tangerang',
    coord: [6.2024, 106.6527]
  },
  {
    key: 4,
    label: 'Bekasi',
    coord: [6.2383, 106.9756]
  }
]

const lat = getAddress.lat;
const long = getAddress.long;
const coordinates = new Coordinates(lat,long);
const params = CalculationMethod.MoonsightingCommittee();
const date = new Date();
const prayerTimes = new PrayerTimes(coordinates, date, params);
const sunnahTimes = new SunnahTimes(prayerTimes);

function PrayerItem(prayer, onSelect) {
  if (prayer === Prayer.Fajr) {
    return "Fajr";
  } else if (prayer === Prayer.Sunrise) {
    return "Sunrise";
  } else if (prayer === Prayer.Dhuhr) {
    return "Dhuhr";
  } else if (prayer === Prayer.Asr) {
    return "Asr";
  } else if (prayer === Prayer.Maghrib) {
    return "Maghrib";
  } else if (prayer === Prayer.Isha) {
    return "Isha";
  } else if (prayer === Prayer.None) {
    return "None";
  }
  console.log(
    Prayer.Asr,
    moment(prayerTimes.Fajr).tz("Pacific/Auckland").format("h:mm A"),
    "prayer"
  );

  return (
    <Pressable onPress={onSelect}>
      <View>
        {/* <Image source={{ uri: prayer.imageUri }} /> */}
        <View>
          <PrimaryButton name="Fajar">
            
            {moment(prayerTimes.fajr).tz("Pacific/Auckland").format(" h:mm A")}
          </PrimaryButton>
          <PrimaryButton name="Dhuhr">
           
            {moment(prayerTimes.dhuhr).tz("Pacific/Auckland").format(" h:mm A")}
          </PrimaryButton>
          <PrimaryButton name="Asr">
            {moment(prayerTimes.asr).tz("Pacific/Auckland").format(" h:mm A")}
          </PrimaryButton>
          <PrimaryButton name="Maghrib">
            {moment(prayerTimes.maghrib)
              .tz("Pacific/Auckland")
              .format(" h:mm A")}
          </PrimaryButton>
          <PrimaryButton name="Isha">
            {moment(prayerTimes.isha).tz("Pacific/Auckland").format(" h:mm A")}
          </PrimaryButton>
        </View>
      </View>
    </Pressable>
  );
}

export default PrayerItem;

const styles = StyleSheet.create({
  textContainer: {
    paddingleft: 100,
    justifyContent: "space-between",
    textAlign: "right",
    color: "white",
    justifyContent: "flex-end",
  },
});
