import { Todo } from "@/types/todo";
import Button from "./Button";

interface TodoItemProps {
  todo: Todo;
  onDelete?: (id: string) => void;
  onComplete?: (id: string) => void;
  showActions?: boolean;
}

export const TodoItem = ({ todo, onDelete, onComplete, showActions = false }: TodoItemProps) => {
  return (
    <div key={todo.id} className="flex flex-row gap-5 w-full h-10 mb-3">
      <div className="flex flex-row justify-center items-center w-full h-full rounded-md shadow-lg border">
        <div className="flex-1 p-2">{todo.text}</div>
        <div className="flex-1 p-2">{todo.date}</div>
      </div>
      {showActions && (
        <div className="flex flex-row gap-4 h-full">
          <Button buttonType="delBtn" onClick={() => onDelete?.(todo.id)} />
          <Button buttonType="completeBtn" onClick={() => onComplete?.(todo.id)} />
        </div>
      )}
    </div>
  );
};
