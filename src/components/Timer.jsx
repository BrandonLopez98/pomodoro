import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export default function Timer({time}) {

    const formattedTime = `${Math.floor(time / 60).toString().padStart(2,"0")}:${(time % 60).toString().padStart(2,"0")}`

   return (
    <View style={styles.container}>
        <Text style={styles.text}>{formattedTime}</Text>
    </View>
   );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        marginVertical:30,
        padding: 15,
        borderRadius: 15,
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize: 80,
        fontWeight: "normal"
    }

  });