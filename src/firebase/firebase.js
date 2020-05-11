import app from "firebase/app"
import FirebaseConfig from "./config"

class Firebase {
    constructor(){
        if(!app.apps.length){
        app.initializeApp(FirebaseConfig)
     }
    }   
  }

  const firebase = new Firebase()

  export default firebase