import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CircularProgressBar from './CircularProgressBar';

function StartButton () {
  return (
    <TouchableOpacity onPress={() => CircularProgressBar}>
      <View style={style.buttonContainer}>
        <Text style={style.buttonText}>TREINAR</Text>
      </View>
    </TouchableOpacity>
  )
}
export default StartButton;

const style = StyleSheet.create({
  buttonContainer: {
    backgroundColor:'rgb(109 40 217)',
    borderRadius:100,
    height:75,
    alignItems: 'center',
    justifyContent: 'center',

    },
  buttonText: {
      fontSize: 24,
      fontWeight: 'semibold',
      color: 'white'
    }
})

