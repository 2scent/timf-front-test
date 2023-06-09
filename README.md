# 팀프레시 프론트엔드 과제

## 배포

- [https://thriving-nasturtium-1f928d.netlify.app/](https://thriving-nasturtium-1f928d.netlify.app/)

## 실행 방법

```
// 패키지 설치
yarn

// 프로젝트 실행
yarn start
```

## 진행 사항

### Mock API

- [x] 목록 조회: GET /orders
- [x] 등록: POST /order
- [x] 삭제: DELETE /order

### 폼

#### 유효성 검사, 시나리오

- [x] 이름
- [x] 휴대폰 번호
- [x] 날짜
- [x] 품목
- [x] 물량
- [x] 출근지
- [x] 상차지 정보

#### 에러 메시지

- [x] 공통
- [x] 이름
- [x] 휴대폰 번호
- [x] 날짜
- [x] 물량

#### 등록

- [x] [등록] 버튼 클릭시 POST /order api 요청
- [x] 요청 성공시 모달 렌더링

### 테이블

- [x] 컬럼, 체크박스
- [x] 페이지네이션
- [x] 삭제

### 기타

- [x] 오더 복사
- [x] 스타일링
- [x] 반응형

## src 폴더 구조

```
features // 기능별로 폴더를 구조화
  order-form // 주문 등록 관련 기능
  order-list // 주문 목록 관련 기능
    api // 주문 목록 관련 API 요청 함수
    components // 주문 목록 관련 컴포넌트
    hooks // 주문 목록 관련 hooks
    types.ts // 주문 목록 관련 타입
mocks // msw 구성 폴더
shared // 프로젝트 전반에 걸쳐 공용으로 사용되는 기능들
  components // 공용 컴포넌트
  hooks // 공용 hooks
  types.ts // 공용 타입
```

## 하고 싶은 말

개인 사정으로 시간을 많이 쓰지 못해서 여러모로 아쉬움이 남는 과제입니다. 특히 마지막에 급하게 스타일링을 하느라 높은 코드 품질을 유지하지 못한 것과 테스트 코드를 작성하지 못한 것이 가장 아쉽습니다.

그럼에도 주어진 조건에서 최선을 다했고, 그 과정에서 많은 것을 배울 수 있었던 좋은 경험이었습니다. 감사합니다.
