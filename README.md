# 📘 TypeScript Todo App 미션

이 미션은 React와 TypeScript를 활용하여 간단한 Todo 애플리케이션을 구현하며, 컴포넌트와 상태에 타입을 정의하고 적용하는 실습입니다.

---

## ✅ 구현 요구사항

### 1. Todo 타입 정의

- `App.tsx`의 `todos` 상태의 초기값 구조를 참고하여 `Todo` 타입을 정의하세요.

---

### 2. 필터 열거형(enum) 정의

- 할 일 보기 필터 상태를 `enum`으로 정의하세요.
- 아래 값을 포함해야 합니다:
  - `SHOW_ALL = "모든 할 일 보기"`
  - `HIDE_COMPLETED = "완료된 할 일 숨기기"`

---

### 3. useState 타입 적용 (todos)

- `todos` 상태에 `useState<타입>` 형식으로 타입을 명시하세요.

---

### 4. useState 타입 적용 (filter)

- `filter` 상태에 `useState<타입>`을 사용하고 초기값은 `Filter.SHOW_ALL`로 설정하세요.

---

### 5. 필터 상태 전환 (switch 문)

- `toggleFilter` 함수에서 `switch` 문을 사용하여 `filter` 상태를 전환하세요.
  - `SHOW_ALL`일 경우 → `HIDE_COMPLETED`
  - `HIDE_COMPLETED`일 경우 → `SHOW_ALL`

---

### 6. addTodo 함수 타입 지정

- `addTodo` 함수의 매개변수 `text`에 문자열 타입(`string`)을 지정하세요.

---

### 7. toggleComplete 함수 타입 지정

- `toggleComplete` 함수의 매개변수 `id`에 숫자 타입(`number`)을 지정하세요.

---

## 🧩 컴포넌트별 요구사항

### 📍 AddTodo 컴포넌트

- `addTodo`에 대한 props 타입 `AddTodoProps`를 정의하세요.
  - `text: string`을 인자로 받아 반환값이 없는 함수
- 해당 타입을 컴포넌트에 적용하세요.

---

### 📍 TodoItem 컴포넌트

- `todo`와 `toggleComplete`에 대한 props 타입 `TodoItemProps`를 정의하세요.
  - `todo`: Todo 타입
  - `toggleComplete`: `id: number`를 인자로 받아 반환값 없음
- 해당 타입을 컴포넌트에 적용하세요.

---

### 📍 TodoList 컴포넌트

- `todos`, `toggleComplete`, `showCompleted`에 대한 props 타입 `TodoListProps`를 정의하세요.
  - `todos`: Todo[] 타입
  - `toggleComplete`: `id: number`를 인자로 받아 반환값 없음
  - `showCompleted`: boolean 타입
- 해당 타입을 컴포넌트에 적용하세요.

---

## 🎯 미션 목표

- React 컴포넌트에 적절한 TypeScript 타입 정의하기
- 상태 및 props에 타입 안정성 부여하기
- enum과 switch문을 활용한 조건 처리 연습
- 타입스크립트를 통해 버그를 줄이고 예측 가능한 코드 작성

---
