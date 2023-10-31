import { View, StyleSheet,ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MainScreen from './screen/MainScreen';
import TopScreen from './screen/TopSceen';
import BottomScreen from './screen/BottomScreen';

export default function App() {
  return (
    
    <LinearGradient colors={['#1c541c', '#ddb52f']} style={styles.rootScreen}>
  
      <ImageBackground source={require('./assets/images/background.jpg')} 
      resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <TopScreen/>
      <MainScreen/>
     <BottomScreen/>
      </ImageBackground>
    </LinearGradient>
  );
}
   const styles = StyleSheet.create({
    rootScreen: {
      flex: 1,
    },
    backgroundImage:{
      opacity:0.18,
    }

   });
