import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import TopScreen from "./screen/TopSceen";
import BottomScreen from "./screen/BottomScreen";
import LocationScreen from "./screen/LocationScreen";
// import PrayerTimesComponent from "./components/PrayerTimes"



export default function App() {
  


  return (
    <LinearGradient colors={["#1c541c", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          <TopScreen />
          <LocationScreen/>
       
          <BottomScreen />
      
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.20,
  },
});
