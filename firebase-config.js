// Firebase Configuration
// New Project: fashion-crew-form
const firebaseConfig = {
    apiKey: "AIzaSyDJf2no17murmqBQwsQTPka0CVaec3Zrdw",
    authDomain: "fashion-crew-form.firebaseapp.com",
    projectId: "fashion-crew-form",
    storageBucket: "fashion-crew-form.firebasestorage.app",
    messagingSenderId: "305126388776",
    appId: "1:305126388776:web:4a4fdad52e39394d2ff11d",
    measurementId: "G-1TG4J16RVD"
};

// Firebase 초기화 확인
console.log('Firebase initializing for project: fashion-crew-form');

if (typeof firebase === 'undefined') {
    console.error('Firebase SDK not loaded! Check your script tags.');
} else {
    firebase.initializeApp(firebaseConfig);
    
    // Firestore 인스턴스 생성 및 설정
    const db = firebase.firestore();
    
    // 네트워크 연결 방식 강제 설정 (Hanging 방지)
    db.settings({ experimentalForceLongPolling: true });
    console.log('Firestore initialized with Long Polling enabled.');
    
    // 전역 변수로 할당 (다른 스크립트에서 사용 가능)
    window.db = db;
    window.APPLICATIONS_COLLECTION = 'applications';
}
