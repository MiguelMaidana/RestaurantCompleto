import app from "firebase/app"

import "firebase/firestore"

import FirebaseConfig from "./config"

class Firebase {
    constructor(){
        if(!app.apps.length){
        app.initializeApp(FirebaseConfig)
     }
     this.db = app.firestore()
    }   
  }

  const firebase = new Firebase()

  export default firebase