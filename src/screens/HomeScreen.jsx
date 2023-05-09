import React, {useContext,useState} from 'react'
import {View,Text,Button,FlatList,StyleSheet, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../context/UserContext'

function HomeScreen() {
  const navigation = useNavigation()
  const [colId,setColId] = useState("")
  const { users,deleteData,getId } = useContext(UserContext)

  return (
    <FlatList style={{backgroundColor:'#109dfa'}} data={users} renderItem={({item:user})=>(
      <View key={user.id} style={styles.contenedor}>
          <Text style={styles.titulo}>Id: {user.id}</Text>
          <Text style={styles.texto}>Titulo: {user.titulo}</Text>
          <Text style={styles.texto}>Descripcion: {user.descripcion}</Text>
          <Button title='Modificar' color='green' onPress={()=> {
            getId(user.id)
            navigation.navigate('Actualizar')
            }}></Button>
          <Text></Text>
          <Button title='Eliminar' color='red' onPress={()=> deleteData(user.id)}></Button>
      </View>
    )}/>
  )
}

const styles = StyleSheet.create({
  contenedor: {backgroundColor:"#696969",padding:10,margin:10,borderRadius:20,marginBottom:5},
  texto: {fontSize:12,color:'white',marginBottom:3},
  titulo:{fontSize:14,color:'white',fontWeight:'bold'},
  vistaVacia: {backgroundColor:"#696969",display:'flex',flex:1,flexGrow:1,justifyContent:'center',alignItems:'center'},
  textoVacio: {fontSize:32,color:'white',fontWeight:'bold'}
})

export default HomeScreen