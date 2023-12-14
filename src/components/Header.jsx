import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["pomodoro", "Short Break", "Long Break"]

export default function Header({setCurrentTime, currentTime, setTime}) {

    function handlePress(index) {
        const newTime = index === 0? 25 : index === 1 ? 5: 15;
        setCurrentTime(index)
        setTime(newTime * 60)
    }

   return (
    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20}}>
        {options.map((item, index)=>(
                <TouchableOpacity 
                key={index} 
                style={[styles.itemStyle, currentTime !== index && {borderColor: "transparent"}]} 
                onPress={()=> handlePress(index)}>
            <Text style={{fontSize: 18}}>{item}</Text>
            
        </TouchableOpacity>
        ))}
    </View>
   );
}

const styles = StyleSheet.create({
   itemStyle: {
    borderWidth: 3,
    marginVertical: 30,
    padding: 5,
    borderColor: "white",
    borderRadius: 10,
   }
  });