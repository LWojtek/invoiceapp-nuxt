import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyClu_0RpNhy3doHIf_9BL_ROKR4U1dyotc',
  // authDomain: 'invoice-app-538ad.firebaseapp.com',
  projectId: 'invoice-app-538ad'
  // storageBucket: 'invoice-app-538ad.appspot.com',
  // messagingSenderId: '725517910214',
  // appId: '1:725517910214:web:8bab33a0354c50e4f4d7c7'
}

/*eslint-disable */
var firebaseApp = {}

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig)
} else {
  firebaseApp = firebase.apps[0]
}
/* eslint-enable */

export default firebaseApp
