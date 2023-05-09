import React,{useContext,useState} from 'react'
import {View,TextInput,Text,StyleSheet,Button} from 'react-native'
import { UserContext } from '../context/UserContext'
import { useNavigation } from '@react-navigation/native'

export default function StackScreen() {
  const [newTitle,setNewTitle] = useState()
  const [newDesc,setNewDesc] = useState()
  const {id,updateData} = useContext(UserContext)
  const navigation = useNavigation()

  

  return (
    <View style={styles.contenedor}>
        <Text style={styles.titulo}>Actualizar Registros</Text>
        <Text style={styles.subtitulo}>ID {id}</Text>
        <TextInput style={styles.formulario} placeholder='Ingrese el titulo de la tarea' onChangeText={(text)=>setNewTitle(text)}/>
        <TextInput style={styles.formulario} placeholder='Ingrese la descripcion del usuario' onChangeText={(text)=>setNewDesc(text)}/>
        <View style={styles.btnCont}>
          <Button color='green' title='Actualizar' onPress={()=> {
            updateData(newTitle,newDesc)
            navigation.navigate('Lista Tareas')
            }}/>
          <Button color='blue' title='Volver' onPress={()=>{
            navigation.navigate('Lista Tareas')
          }}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {display:'flex',flex:1,justifyContent:'center',alignItems:'center',padding:10,backgroundColor:'#c2c2c2'},
    formulario: {padding:10,borderStyle:'solid',borderWidth:1,marginTop:10,borderRadius:15,marginBottom:5,width:250},
    titulo: {fontSize:26},
    subtitulo: {fontSize: 21},
    btnCont: {display:'flex',gap:6,flexDirection:'row'}
})
