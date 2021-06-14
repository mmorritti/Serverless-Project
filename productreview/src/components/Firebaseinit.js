import firebase from 'firebase'
import 'firebase/firestore'
import firebaseconfig from './Firebaseconfig'
const firebaseApp = firebase.initializeApp(firebaseconfig)
export default firebaseApp.firestore()
