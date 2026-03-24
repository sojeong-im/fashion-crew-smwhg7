# (느)좋되고싶어? - Fashion Crew 7기 모집 Application Form

패션 크루 지원서 웹 페이지입니다.

## 📁 파일 구조

```
fashion-crew-form/
├── index.html          # 메인 HTML 페이지
├── hero.jpg            # 히어로 섹션 배경 이미지
├── example1.jpg        # 변신 예시 1
├── example2.jpg        # 변신 예시 2
├── example3.jpg        # 변신 예시 3
├── example4.jpg        # 변신 예시 4
├── example5.jpg        # 변신 예시 5
├── map.png             # 서울 지도
└── README.md           # 이 파일
```

## 🎨 주요 기능

### 1. **히어로 섹션**
- 임팩트 있는 첫 화면
- 배경 이미지와 함께 타이틀 표시
- 스크롤 인디케이터로 부드러운 내비게이션

### 2. **변신 사례 갤러리**
- 5개의 BEFORE/AFTER 사진 전시
- 호버 시 오버레이 효과
- 반응형 그리드 레이아웃

### 3. **인터랙티브 지도**
- 클릭하여 거주 지역 선택
- 핀 드롭 애니메이션
- 위치 좌표 자동 저장

### 4. **지원서 폼**
- Identification (이름/나이/성별)
- Contact (연락처)
- Academic (학교/전공/학년)
- Motivation (지원 동기)
- Location (거주 지역 - 지도 클릭)
- Style Photo (스타일 사진 안내)

### 5. **폼 검증 및 제출**
- 필수 항목 자동 검증
- 지도 클릭 여부 확인
- 제출 완료 메시지 표시

## 🎯 디자인 특징

- **컬러 팔레트**:
  - Point Color: `#00FF41` (형광 그린)
  - Background: `#0A0A0A` (다크 블랙)
  - Card: `#141414`
  - Input: `#1F1F1F`

- **타이포그래피**: Pretendard 폰트 사용
- **애니메이션**: 
  - Fade In 효과
  - Pin Drop 애니메이션
  - Hover 효과
  - Pulse 애니메이션

- **반응형 디자인**: 모바일, 태블릿, 데스크탑 모두 지원

## 🚀 사용 방법

1. **로컬에서 실행**:
   ```bash
   open index.html
   ```
   또는 브라우저에서 `index.html` 파일을 직접 열기

2. **웹 서버로 배포**:
   - Netlify, Vercel, GitHub Pages 등에 업로드
   - 모든 이미지 파일도 함께 업로드 필요

## 📝 폼 데이터 처리

현재는 프론트엔드 전용입니다. 실제 서버 연동을 위해서는:

1. `index.html` 파일의 `form.addEventListener('submit')` 부분 수정
2. API 엔드포인트 추가:
   ```javascript
   fetch('/api/submit', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
   })
   ```

## 🛠 커스터마이징

### 색상 변경
`:root` CSS 변수 수정:
```css
:root {
    --point-color: #00FF41;
    --bg-dark: #0A0A0A;
    --card-bg: #141414;
    /* ... */
}
```

### 텍스트 수정
HTML 파일에서 해당 섹션의 텍스트를 직접 수정

### 이미지 교체
같은 이름의 파일로 교체하거나, HTML의 `src` 속성 수정

## 📱 브라우저 호환성

- Chrome/Edge: ✅
- Firefox: ✅  
- Safari: ✅
- Mobile Browsers: ✅

## 💡 향후 개선 사항

- [ ] 실제 이미지 업로드 기능 추가
- [ ] 백엔드 API 연동
- [ ] 이메일 알림 시스템
- [ ] 관리자 대시보드
- [ ] 멀티 스텝 폼으로 개선

---

**Made with 💚 for Fashion Crew 7기**
