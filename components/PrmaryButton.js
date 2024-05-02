import { View, Text, Pressable, StyleSheet } from "react-native";
import IconButton from "./UI/IconButton";
function PrimaryButton({ children,name}) {
  function onPressHandler() {
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressHandler}
        android_ripple={{ color: "#640233" }}
      >
       <Text style={styles.timeText} > {name}</Text>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    
  },
  buttonInnerContainer: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent:'space-between',
    backgroundColor: "#72063c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonText: {
    color: "green",
    fontSize: 18,
  
  },
  timeText: {
    color: "white",
    textAlign: "right",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
