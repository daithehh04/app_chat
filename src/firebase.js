import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCNlZA8SdZXBfDEdjFqGMeBwSExb5Kz43k",
    authDomain: "chat-e2a81.firebaseapp.com",
    projectId: "chat-e2a81",
    storageBucket: "chat-e2a81.appspot.com",
    messagingSenderId: "298580301999",
    appId: "1:298580301999:web:4f0b3da934a9b7413f5c5a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()