# Firebase 설정 가이드

Firebase 프로젝트를 설정하고 관리자 페이지를 사용하는 방법입니다.

## 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력 (예: `느좋-fashion-crew`)
4. Google Analytics는 선택사항 (필요시 활성화)
5. 프로젝트 생성 완료

## 2. Firebase 앱 등록

1. 프로젝트 개요 페이지에서 "웹" 아이콘(</>) 클릭
2. 앱 닉네임 입력 (예: `느좋 지원서`)
3. "Firebase SDK 추가" 단계에서 **config 객체** 복사
4. `firebase-config.js` 파일 열기
5. `YOUR_API_KEY` 등의 값을 복사한 실제 값으로 교체

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};
```

## 3. Firestore Database 설정

1. Firebase Console에서 **Firestore Database** 메뉴 선택
2. "데이터베이스 만들기" 클릭
3. **프로덕션 모드로 시작** 선택
4. 위치 선택: `asia-northeast3 (Seoul)` 권장
5. "완료" 클릭

### 보안 규칙 설정

Firestore Database > 규칙 탭으로 이동하여 다음 규칙 적용:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // applications 컬렉션: 누구나 쓰기 가능, 관리자만 읽기/수정 가능
    match /applications/{document} {
      allow create: if true; // 지원서 제출은 누구나 가능
      allow read, update, delete: if request.auth != null; // 관리자만 조회/수정 가능
    }
  }
}
```

## 4. Authentication 설정

1. Firebase Console에서 **Authentication** 메뉴 선택
2. "시작하기" 클릭
3. "Sign-in method" 탭 선택
4. "이메일/비밀번호" 클릭하여 활성화

### 관리자 계정 생성

1. Authentication > Users 탭으로 이동
2. "사용자 추가" 클릭
3. 관리자 이메일과 비밀번호 입력
   - 예: `admin@fashioncrew.com` / `안전한비밀번호`
4. "사용자 추가" 클릭

## 5. 파일 구조

```
fashion-crew-form/
├── index.html              # 지원서 페이지
├── admin.html              # 관리자 페이지
├── firebase-config.js      # Firebase 설정 (실제 값으로 수정 필요)
├── map.png                 # 서울 지도
├── hero.jpg                # 히어로 이미지
├── example1.jpg ~ example5.jpg  # 변신 사례 이미지
└── README.md
```

## 6. 배포

### Netlify 배포 (현재 사용 중)

```bash
npx -y netlify-cli deploy --dir=. --prod --create-site
```

**중요**: Netlify에 배포 후 Firebase 콘솔에서 "승인된 도메인" 추가:
1. Firebase Console > Authentication > Settings
2. "승인된 도메인" 탭
3. Netlify 도메인 추가 (예: `https://spectacular-nasturtium-c428b4.netlify.app`)

## 7. 사용 방법

### 지원자 페이지
- URL: `https://your-site.netlify.app/index.html`
- 지원서 작성 → 자동으로 Firestore에 저장됨

### 관리자 페이지
- URL: `https://your-site.netlify.app/admin.html`
- 생성한 관리자 이메일/비밀번호로 로그인
- 지원자 목록 확인 및 승인/거절 처리

## 8. Firestore 데이터 구조

### applications 컬렉션

```javascript
{
  identification: "김철수 / 24 / 남",
  contact: "010-1234-5678",
  academic: "서울대학교 / 컴퓨터공학 / 3학년",
  motivation: "패션에 관심이 많아서...",
  location: {
    x: "62.50",
    y: "72.30",
    station: "강남역",
    line: "2호선"
  },
  status: "pending", // pending | approved | rejected
  timestamp: "2026-02-12T05:13:00.000Z",
  createdAt: Timestamp
}
```

## 9. 보안 체크리스트

- [ ] Firebase 설정 파일에 실제 값 입력
- [ ] Firestore 보안 규칙 적용
- [ ] Authentication 활성화
- [ ] 관리자 계정 생성
- [ ] Netlify 도메인을 Firebase 승인된 도메인에 추가
- [ ] `admin.html`에 `robots.txt` 설정 (검색 엔진 노출 방지)

## 10. 문제 해결

### "Permission denied" 오류
- Firestore 보안 규칙이 올바르게 설정되었는지 확인
- 관리자 페이지에서 로그인 되어있는지 확인

### 데이터가 저장되지 않음
- 브라우저 콘솔에서 에러 확인
- `firebase-config.js`에 올바른 값이 입력되었는지 확인
- Firestore Database가 생성되었는지 확인

### 로그인 실패
- Authentication에서 이메일/비밀번호 활성화 확인
- 사용자가 생성되었는지 확인
- 도메인이 승인되었는지 확인

## 11. 추가 기능 아이디어

- [ ] 지원자 상세 정보 모달 팝업
- [ ] CSV/Excel 다운로드 기능
- [ ] 이메일 알림 (Firebase Functions 사용)
- [ ] 검색 및 정렬 기능
- [ ] 메모/코멘트 기능
- [ ] 파일 업로드 (Firebase Storage)

---

**문의사항이 있으시면 Firebase 문서를 참고하세요:**
- [Firebase 시작하기](https://firebase.google.com/docs/web/setup)
- [Firestore 보안 규칙](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Authentication](https://firebase.google.com/docs/auth/web/start)
