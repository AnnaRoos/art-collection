import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB8i4G-wblY_5C4q3Qa1MPdnmBXyhQ10ww',
  authDomain: 'art-collection-ba95c.firebaseapp.com',
  databaseURL:
    'https://art-collection-ba95c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'art-collection-ba95c',
  storageBucket: 'art-collection-ba95c.appspot.com',
  messagingSenderId: '746242567116',
  appId: '1:746242567116:web:fd342bedb3fd9695654b69',
  measurementId: 'G-SGH1LZQWDW',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;