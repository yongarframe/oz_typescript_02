// TodoItem.js
import "../styles/TodoItem.css";
import { Todo } from "../App";

// 1. TodoItemProps 타입을 정의하세요.
// - TodoItem 컴포넌트는 todo 라는 객체와, toggleComplete라는 이름의 함수를 props로 받습니다.
// - todo는 App.tsx에서 정의했던 Todo 타입을 가집니다.
// - toggleComplete 함수는 매개변수로 number 타입의 변수 id를 받으며, 반환값은 없습니다.
interface TodoItemProps {
  todo: Todo;
  toggleComplete(id: number): void;
}

//2. 전달받은 todo,toggleComplete가 올바른 타입으로 인식되도록 타입을 적용하세요.
//힌트 : 리액트에서 props의 타입을 정의하는 방법 -> ({props 이름} : props타입)
const TodoItem = ({ todo, toggleComplete }: TodoItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
