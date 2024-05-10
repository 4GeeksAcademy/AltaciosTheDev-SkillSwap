// Importa solo lo que necesitas de firebase/app
// import firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/storage";
// import 'firebase-storage'; // Importa el módulo de almacenamiento si lo necesitas
// Configura tu objeto de configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBJvAEsZKLNfPeIsTPUVZXTsjiovs2RnnI",
    authDomain: "skillswap-b3c76.firebaseapp.com",
    projectId: "skillswap-b3c76",
    storageBucket: "skillswap-b3c76.appspot.com",
    messagingSenderId: "396419256652",
    appId: "1:396419256652:web:a3799610e731654210ffe9"
  };
// Inicializa Firebase si aún no está inicializado
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Obtiene una referencia al servicio de almacenamiento de Firebase
const storage = firebase.storage();
// Exporta el objeto firebase y/o los módulos que necesites
// export { firebase };
export { firebase, storage };
