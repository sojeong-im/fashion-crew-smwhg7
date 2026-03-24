// Firebase Configuration
// Project: smwhg7

const firebaseConfig = {
    apiKey: "AIzaSyDKVKTxpYeogUBm51E5B7h9jD2auBAJfMg",
    authDomain: "smwhg7.firebaseapp.com",
    projectId: "smwhg7",
    storageBucket: "smwhg7.firebasestorage.app",
    messagingSenderId: "539761228990",
    appId: "1:539761228990:web:ec5e7c29b36493d28132ef",
    measurementId: "G-JG201GG6BQ"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firestore 및 Auth 인스턴스
const db = firebase.firestore();
// const auth = firebase.auth(); // Auth 사용 안함

// 컬렉션 이름
const APPLICATIONS_COLLECTION = 'applications';
