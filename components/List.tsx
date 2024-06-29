import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface propsTreinando {
  seriesRestantes : number,
  numeroRep: number,
  intervalo: number
}

function List (props: propsTreinando) {
    return ( 
      <View style={style.container}>
        <Text style={{fontSize:25, color:"white"}}>Series restantes: {props.seriesRestantes}</Text>
        <Text style={{fontSize:25, color:"white"}}>Número de repetições: {props.numeroRep}</Text>
        <Text style={{fontSize:25, color:"white"}}>Tempo de intervalo: {props.intervalo}</Text>
      </View>
    )
}
export default List;

const style = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'gray'
  }
})