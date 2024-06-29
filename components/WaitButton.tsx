import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
interface propsWaitButton {
  active: boolean,
  setActive: Function
}

function WaitButton ({active, setActive}: propsWaitButton) {
  return (
    <TouchableOpacity onPress={() => setActive(!active)}>
      <View style={style.buttonContainer}>
        <Text style={style.buttonText}>DESCANSAR</Text>
      </View>
    </TouchableOpacity>
  )
}
export default WaitButton;

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
      color: 'black'
    }
})

