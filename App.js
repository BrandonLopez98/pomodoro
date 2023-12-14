import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import {Audio} from 'expo-av'


const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"]

export default function App() {


  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREACK");
  const [isActive, setIsActive] = useState(false)

  useEffect(()=>{
    let interval = null;

    if (isActive) {
        interval = setInterval(()=>{
          setTime(time-1)
        }, 1000
        
        )
    } else{
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false),
      setIsWorking(prev => !prev),
      setTime(isWorking ? 300: 1500)
    }

    return () => clearInterval(interval)
  },[isActive,time])

function handleStartStop() {
  playSound();
  setIsActive(!isActive);
}

async function playSound() {
  const {sound} = await Audio.Sound.createAsync(
    require('./assets/SonidoReloj.mp3')
  )
  await sound.playAsync()
}

  return (
    <View style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <Text style={styles.text}>Pomodoro</Text>
      <Header 
        currentTime={currentTime} 
        setCurrentTime={setCurrentTime}  
        setTime={setTime}/>

      <Timer time={time}/>

      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text style={styles.textButton}>{isActive ? "STOP" : "START"}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingVertical: 70,
   paddingHorizontal:15,
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center"

  },
  button:{
    backgroundColor: "#333333",
    padding: 15,
    borderRadius: 15,
    marginTop: 30,
  },
  textButton:{
    textAlign:"center",
    color:"white",
    fontSize: 18,
  }
});
