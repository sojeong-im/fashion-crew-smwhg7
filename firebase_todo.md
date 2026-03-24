# ✅ Firebase 추가 설정 체크리스트

Firebase 설정 파일이 업데이트되었습니다! 이제 Firebase Console에서 다음 단계를 진행해주세요.

## 🔗 Firebase Console 링크
https://console.firebase.google.com/project/smwhg7

---

## 1. ✅ Firestore Database 설정

### 1-1. Firestore 생성
1. Firebase Console > **Build** > **Firestore Database** 클릭
2. "데이터베이스 만들기" 버튼 클릭
3. **프로덕션 모드로 시작** 선택
4. 위치: **asia-northeast3 (Seoul)** 선택
5. "사용 설정" 클릭

### 1-2. 보안 규칙 설정
Firestore Database 생성 후, **규칙** 탭으로 이동하여 다음 규칙 복사/붙여넣기:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // applications 컬렉션
    match /applications/{document} {
      // 누구나 지원서 제출 가능
      allow create: if true;
      
      // 로그인한 관리자만 읽기/수정/삭제 가능
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

"게시" 버튼 클릭!

---

## 2. ✅ Authentication 설정

### 2-1. Authentication 활성화
1. Firebase Console > **Build** > **Authentication** 클릭
2. "시작하기" 버튼 클릭
3. **Sign-in method** 탭 선택
4. **이메일/비밀번호** 클릭
5. 활성화 토글 ON
6. "저장" 클릭

### 2-2. 관리자 계정 생성
1. **Users** 탭으로 이동
2. "사용자 추가" 버튼 클릭
3. 관리자 정보 입력:
   - **이메일**: `admin@smwhg7.com`
   - **비밀번호**: `ydp12000`
4. "사용자 추가" 클릭

✅ **관리자 로그인 정보:**
- 이메일: `admin@smwhg7.com`
- 비밀번호: `ydp12000`

⚠️ **중요**: 이 정보로 관리자 페이지(https://smwhg7.netlify.app/admin.html)에 로그인하세요!

### 2-3. 승인된 도메인 추가
1. Authentication > **Settings** 탭
2. **승인된 도메인** 섹션으로 스크롤
3. "도메인 추가" 버튼 클릭
4. 다음 도메인 추가:
   ```
   smwhg7.netlify.app
   ```
5. "추가" 클릭

---

## 3. 🌐 배포된 사이트 URL

### 지원서 페이지 (공개)
https://smwhg7.netlify.app/index.html

### 관리자 페이지 (비공개)
https://smwhg7.netlify.app/admin.html

---

## 4. 🧪 테스트 방법

### 4-1. 지원서 제출 테스트
1. https://smwhg7.netlify.app/index.html 접속
2. 폼 작성
3. 지도에서 위치 클릭
4. "느좋 멤버 지원하기" 버튼 클릭
5. 성공 메시지 확인

### 4-2. 관리자 페이지 테스트
1. https://smwhg7.netlify.app/admin.html 접속
2. 생성한 관리자 이메일/비밀번호로 로그인
3. 방금 제출한 지원서가 표시되는지 확인
4. 승인/거절 버튼 테스트

### 4-3. Firestore에서 데이터 확인
1. Firebase Console > Firestore Database
2. `applications` 컬렉션 확인
3. 제출된 데이터가 저장되어 있는지 확인

---

## 5. 🔒 보안 체크리스트

- [ ] Firestore Database 생성 완료
- [ ] Firestore 보안 규칙 적용 완료
- [ ] Authentication 활성화 완료
- [ ] 관리자 계정 생성 완료
- [ ] 승인된 도메인 추가 완료
- [ ] 지원서 제출 테스트 완료
- [ ] 관리자 로그인 테스트 완료

---

## 6. 📊 Firestore 데이터 구조 예시

제출된 지원서는 다음과 같은 형태로 저장됩니다:

```javascript
{
  identification: "김철수 / 24 / 남",
  contact: "010-1234-5678",
  academic: "서울대학교 / 컴퓨터공학 / 3학년",
  motivation: "패션에 관심이 많고...",
  location: {
    x: "62.50",
    y: "72.30",
    station: "강남역",
    line: "2호선"
  },
  status: "pending",
  timestamp: "2026-02-12T05:20:00.000Z",
  createdAt: Timestamp(2026-02-12 05:20:00)
}
```

---

## 7. ❓ 문제 해결

### "Permission denied" 오류
→ Firestore 보안 규칙을 확인하세요

### 로그인 안됨
→ Authentication에서 이메일/비밀번호가 활성화되어 있는지 확인
→ 승인된 도메인에 smwhg7.netlify.app이 추가되어 있는지 확인

### 데이터가 안 보임
→ 브라우저 개발자 도구 콘솔(F12)에서 에러 확인
→ Firestore Database가 생성되어 있는지 확인

---

## 8. 🎉 완료!

모든 설정이 완료되면:

1. 지원서 페이지 테스트 ✅
2. 관리자 페이지에서 확인 ✅
3. 실제 사용 시작! 🚀

**궁금한 점이 있으면 언제든지 물어보세요!**
