import { View, StyleSheet, Text } from "react-native";
import IconButton from "./UI/IconButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useState,useEffect } from "react";
import { getAddress } from "../util/location";

function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  async function verifyPermission() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Permission Needed", "You need to grant location permission");
      return false;
    }
    return true;
  }
  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );

       
        console.log(address,'adress');
        setAddress(address)
       
      }
     
    }
handleLocation();
    
  }, [pickedLocation]);

  async function getLocationHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const pickedLocation = await getCurrentPositionAsync();

    setPickedLocation({lat:pickedLocation.coords.latitude,lng: pickedLocation.coords.longitude,});
    console.log(pickedLocation, "kkk");

    
  }
  return (
    <View>
      <IconButton icon="location" color="black" onPress={getLocationHandler}>
        {address ? (
          <Text style={styles.locationText}>
            {address}
          </Text>
        ) : (
          <Text style={styles.errorText}>Location data not available</Text>
        )}
      </IconButton>
    </View>
  );
}
export default LocationPicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  locationText: {
    fontSize: 18,
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
