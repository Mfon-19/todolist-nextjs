"use client";

import Button from "@/components/Button";
import { TodoItem } from "@/components/TodoItem";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useTodos } from "../hooks/useTodos";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");
  const [text, setText] = useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useTodos();

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-200">
      <div className="w-[700px] min-h-40 border-black rounded-lg bg-white">
        <div className="flex items-center justify-center p-6">
          <h1 className="text-black text-6xl font-bold">TODO</h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200">
          <button onClick={() => setActiveTab("active")} className={`flex-1 py-4 px-6 text-center ${activeTab === "active" ? "border-b-2 border-teal-500 text-teal-600 font-medium" : "text-gray-500 hover:text-gray-700"}`}>
            Active
          </button>
          <button onClick={() => setActiveTab("completed")} className={`flex-1 py-4 px-6 text-center ${activeTab === "completed" ? "border-b-2 border-teal-500 text-teal-600 font-medium" : "text-gray-500 hover:text-gray-700"}`}>
            Completed
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="p-6">
          {activeTab === "active" ? (
            <>
              {todos.filter((todo) => !todo.isCompleted).map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onComplete={completeTodo} showActions={true} />
              ))}
              <div className="flex flex-row gap-5 h-10">
                <input
                  type="text"
                  placeholder="Enter a new todo..."
                  className="flex h-full w-full rounded-md border border-input bg-transparent px-3 py-1 text-base 
                    shadow-sm transition-colors placeholder:text-muted-foreground md:text-sm"
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <Button buttonType="addBtn" onClick={() => {
                  addTodo(text);
                  setText("");
                }}/>
              </div>
            </>
          ) : (
            <>
              {todos.filter((todo) => todo.isCompleted).map((todo) => {
                  if (todo.isCompleted) return <TodoItem key={todo.id} todo={todo} />;
              })}
            </>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
}
