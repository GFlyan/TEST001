import { StyleSheet, View, Text} from "react-native";
import React, { useState } from "react";
import ReturnButton from "./components/ReturnButton";
import InfoButton from "./components/InfoButton";
import CircularProgressBar from "./components/CircularProgressBar";
import StartButton from "./components/StartButton";
import WaitButton from "./components/WaitButton";
import ExerciseName from "./components/ExerciseName";
import List from "./components/List";
import Halter from "./components/Halter";
import { Barbell } from "phosphor-react-native";


function Index() {
  const [activeStartButton, setActiveStartButton] = useState(false)
  const [activeWaitButton, setActiveWaitButton] = useState(false)
  console.log(activeWaitButton);
  const dataExercicios = [
    {
      "id": "2febb97c-db33-43c2-a24f-a94c5a22fa5c",
      "numeroRep": 15,
      "intervalo": 2,
      "numeroSer": 2,
      "carga": 20,
      "treinoId": "a8209442-c441-46b4-8d5f-e984e3096cda",
      "exercicioId": "6f38f222-a112-49c3-b298-c5db07156614",
      "exercicio": {
        "id": "6f38f222-a112-49c3-b298-c5db07156614",
        "nome": "Rosca Inversa"
      }
    },
    {
      "id": "71a535b3-7134-455f-9996-aa88db319e16",
      "numeroRep": 15,
      "intervalo": 3,
      "numeroSer": 2,
      "carga": 40,
      "treinoId": "a8209442-c441-46b4-8d5f-e984e3096cda",
      "exercicioId": "e5231e46-bbcf-4e8d-a49e-25c84d964c66",
      "exercicio": {
        "id": "e5231e46-bbcf-4e8d-a49e-25c84d964c66",
        "nome": "Rosca Direta"
      }
    }
  ]
  const [exercicioAtualTreino, setExercicioAtualTreino] = useState(0);
  const [numeroSeriesRestantes, setNumeroSeriesRestantes] = useState(dataExercicios[exercicioAtualTreino].numeroSer)
  const [invervaloExercicioAtual, setIntervaloExercicioAtual] = useState(dataExercicios[exercicioAtualTreino].intervalo)

   async function handleEndTimer(){
    
    if (numeroSeriesRestantes == 1){
      
      setExercicioAtualTreino(prevState=> prevState + 1 )
      setNumeroSeriesRestantes(dataExercicios[exercicioAtualTreino].numeroSer)      
      setIntervaloExercicioAtual(dataExercicios[exercicioAtualTreino].intervalo)      
      setActiveWaitButton(false)
    }
    else {
      console.log("mais uma series");
      
      setNumeroSeriesRestantes(prevState => prevState - 1 )      
      setActiveWaitButton(false)
    }
    if (dataExercicios.length - 1 == exercicioAtualTreino){
      // LEVAR PARA TELA PRINCIPAL
    }
  }
  console.log(exercicioAtualTreino, numeroSeriesRestantes, invervaloExercicioAtual);
  
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        {/* <ReturnButton/> */}
        {/* <InfoButton/> */}
      </View>
        <ExerciseName nome={dataExercicios[exercicioAtualTreino].exercicio.nome} />
      <View style={style.circularProgressBar}>
        {
          activeWaitButton
          ? <CircularProgressBar tempo={dataExercicios[exercicioAtualTreino].intervalo} handleEndTimer={handleEndTimer}/>
          : <Barbell size={250} color="#7000FA"/>
          //  <List 
          //     numeroRep={dataExercicios[exercicioAtualTreino].numeroRep}
          //     seriesRestantes={numeroSeriesRestantes}
          //     intervalo={dataExercicios[exercicioAtualTreino].intervalo}
          //     />
        }
      </View>
      <View style={style.startButton}>
        <StartButton/>
        <WaitButton active={activeWaitButton} setActive={setActiveWaitButton}/>
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
