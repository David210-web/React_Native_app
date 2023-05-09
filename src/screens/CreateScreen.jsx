import React,{useState,useContext} from 'react'
import {View,TextInput,Text,StyleSheet,Button, Alert} from 'react-native'
import { UserContext } from '../context/UserContext'
import { useNavigation } from '@react-navigation/native'

export default function CreateScreen() {
  const navigation = useNavigation()

  const [titulo, settitle] = useState("") //Creamos el estado para almacenar el titulo de la nueva tarea
  const [descripcion, setDescription] = useState("") //Creamos el estado para almacenar el estado de la descripcion de la nueva tarea
  const {agregarTarea} = useContext(UserContext)

  const handleTask =()=>{
    const task = {titulo,descripcion}
    agregarTarea(task)
    settitle('')
    setDescription('')
    Alert.alert('Dato agregado','El dato se ha agregado correctamente')
    navigation.navigate('Home')
    // console.log(task)
  }

  return (
    <View style={styles.contenedor}>
        <Text style={styles.titulo}>Crear Registros</Text>
        <TextInput style={styles.formulario} placeholder='Ingrese el titulo de la tarea' onChangeText={(text)=> settitle(text)}/>
        <TextInput style={styles.formulario} placeholder='Ingrese la descripcion de la tarea' onChangeText={(text)=>setDescription(text)}/>
        <Button color='red' title='Crear' onPress={()=> handleTask()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {display:'flex',flex:1,justifyContent:'center',alignItems:'center',padding:10},
    formulario: {padding:10,borderStyle:'solid',borderWidth:1,marginTop:10,borderRadius:15,marginBottom:5,width:250},
    titulo: {fontSize:26}
})