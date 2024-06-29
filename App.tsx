import { StyleSheet, View} from "react-native";
import React from "react";
import ReturnButton from "./components/ReturnButton";
import InfoButton from "./components/InfoButton";
import CircularProgressBar from "./components/CircularProgressBar";
import StartButton from "./components/StartButton";
import ExerciseName from "./components/ExerciseName";
import Halter from "./components/Halter";

function Index() {
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <ReturnButton/>
        <InfoButton/>
      </View>
        <ExerciseName/>
      <View style={style.circularProgressBar}>
        {/* <Halter/> */}
        <CircularProgressBar/>
      </View>
      <View style={style.startButton}>
        <StartButton/>
      </View>
    </View> 
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    display:'flex'
  },
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    alignItems: 'flex-end'
  },
  circularProgressBar: {
    height:'65%', 
    justifyContent:'center', 
    alignItems:'center'
  },
  startButton: {
    paddingHorizontal:50
  }
})
export default Index;
