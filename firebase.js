// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js"
import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, onSnapshot,updateDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL7E5_VjGX9N0oYZKNne2L7Oh3I68VW14",
  authDomain: "despensa-dc8c7.firebaseapp.com",
  projectId: "despensa-dc8c7",
  storageBucket: "despensa-dc8c7.appspot.com",
  messagingSenderId: "881402416149",
  appId: "1:881402416149:web:804b257550df890f5ed21c",
  measurementId: "G-CS5R7N45B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const MJSOK =()=>{
    Swal.fire({
        title: "Exelente!",
        text: "Los datos fueron guardados correctamente!",
        icon: "success"
      });
}

const MJERROR =()=>{
    Swal.fire({
        title: "Oh no!",
        text: "No se lograron guardar los datos!",
        icon: "error"
      });
}

export const save = (emp) => {
    //addDoc es una función de firestore que permite añadir un nuevo documento a la colección 
    //collection es una función de firestore que permite recibir la base de datos y el nombre de la colección
    addDoc(collection(db, 'Despensa'), emp)

    .then((docRef) => {
        MJSOK();
    })
    .catch((error) => {
        MJERROR();
    });
}

//función para listar todos los registros
export const getData = (data) => {
    //onSnapshot es la función que permite retornar la colección y asignarla a una variable
    onSnapshot(collection(db, 'Despensa'), data)
}

//función eliminar 
export const eliminar = (id) =>{
    //deleteDoc es la función de firestore que permite eliminar un documento por su id
    //doc es la función que permite buscar el documento por su id 
    deleteDoc(doc(db,'Despensa',id))
}

//getDoc obtener un documento, porque debe esperar a traer el resultado  
export const obtener = (id) => getDoc(doc(db,'Despensa',id))

//función para actualizar los datos del documento 
export const update = (id,Despensa) =>{
    //updateDoc es una función de firestore permite modificar un documento seleccionado 
    updateDoc(doc(db,'Despensa',id),Despensa)
}