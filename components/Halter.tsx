import { Text, View } from 'react-native'
import React from 'react'
import { Barbell } from 'phosphor-react-native';

interface propsTreinando {
  seriesRestantes : number,
  numeroRep: number,
  intervalo: number
}

function Halter (props: propsTreinando) {
    return (

      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize:25, color:"white"}}>Series restantes: {props.seriesRestantes}</Text>
        <Text style={{fontSize:25, color:"white"}}>Número de repetições: {props.numeroRep}</Text>
        <Text style={{fontSize:25, color:"white"}}>Tempo de intervalo: {props.intervalo}</Text>

      </View>
    )
}
export default Halter;