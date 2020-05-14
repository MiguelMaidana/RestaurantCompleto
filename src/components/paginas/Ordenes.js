import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from "../../firebase/index"


const Ordenes = props => {

    // context con las operacion de Firebase

    const {firebase} = useContext(FirebaseContext)

    // state con las ordenes

    const [ordenes,guardarOrdenes] = useState([])

    useEffect(()=>{

        const obtenerOrdene =()=>{
            firebase.db.collection("ordenes").where("completado","==",false).onSnapshot(manejarSnapshot);
        }

        obtenerOrdene()

    },[firebase.db])

    function manejarSnapshot (snapshot) {
        const ordenes = snapshot.docs.map(doc =>{
            return {
                id : doc.id,
                ...doc.data()
            }
        })
        guardarOrdenes(ordenes)
    }

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Ordenes</h1>
        </>
    );
};


export default Ordenes;