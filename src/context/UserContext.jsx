import {createContext,useState,useEffect} from 'react'
import { collection,onSnapshot,addDoc,deleteDoc, doc,updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase';
import { Alert } from 'react-native';


export const UserContext = createContext();
export const UserContextProvider = ({children})=>{
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [idData,setIdData] = useState("")
    const [id,setId] = useState("")

    function agregarTarea(tarea){
        const userDB = collection(db,'tasks')
        addDoc(userDB,{
            id:users.length+1,
            titulo: tarea.titulo,
            descripcion:tarea.descripcion
        })
    }

    function getId(id){
        setId(id);
        console.log(id)
    }

    function deleteData(userId){
        const user = doc(db,'tasks',userId)
        deleteDoc(user)
        Alert.alert('Dato eliminado','Se ha eliminado correctamente')
    }

    const updateData = async(title,descripcion)=>{
        const docRef = doc(db,'tasks',id)
        try {
            await updateDoc(docRef,{
              titulo:title,
              descripcion:descripcion
            })
            Alert.alert('Dato modificado')
          } catch (error) {
            Alert.alert('Error al actualizar el documento',error)
          }
    }

    useEffect(()=>{
        setLoading(true)
        const taskQuery = collection(db,'tasks')
        onSnapshot(taskQuery,(snapshot)=>{
            let taskList = []
            snapshot.docs.map(doc => taskList.push({...doc.data(),id:doc.id}))
            setUsers(taskList)
            setLoading(false)
        })
    },[])

    return(
        <UserContext.Provider value={{users,deleteData,agregarTarea,getId,id,updateData}}>
            {children}
        </UserContext.Provider>
    )
}