import firebase from 'firebase'

export const app = firebase.initializeApp({
  projectId: 'payment-app-v3',
  appId: '1:114221178375:web:d794a876f6f3bc360954a2',
  databaseURL: 'https://payment-app-v3-default-rtdb.firebaseio.com',
  storageBucket: 'payment-app-v3.appspot.com',
  locationId: 'us-central',
  apiKey: 'AIzaSyCrm02HBLiw07Fha-cYYzgcnCZljDu_Xnc',
  authDomain: 'payment-app-v3.firebaseapp.com',
  messagingSenderId: '114221178375',
})
