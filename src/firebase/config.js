import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from '@firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAiRtDuekW-XQa-g7bhsl5HYili_3giNLs',
  authDomain: 'next-js-coderhouse.firebaseapp.com',
  projectId: 'next-js-coderhouse',
  storageBucket: 'next-js-coderhouse.appspot.com',
  messagingSenderId: '792647925063',
  appId: '1:792647925063:web:5dfd9899680b395752e062'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
