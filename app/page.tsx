"use client";

import Button from "@/components/button";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Home() {
  const initialTodo = { id: uuid(), text: "Add your first todo...", isCompleted: false, date: new Date().toUTCString().slice(0, 16) };
  console.log(initialTodo);
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");
  const [todos, setTodos] = useState([initialTodo]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    const newTodo = { id: uuid(), text: text, isCompleted: false, date: new Date().toUTCString() };
    setTodos((prev) => [...prev, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

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
            <div>
              { todos && todos.map((todo) => 
                <div key={todo.id} className="flex flex-row gap-5 w-full h-10 border rounded-md mb-3">
                  <div className="p-6">
                    {todo.text}
                  </div>
                  <div className="flex flex-row p-6 gap-5">
                    <Button buttonType="delBtn" />
                    <Button buttonType="completeBtn" />
                  </div>
                </div>
              )}
              <div className="flex flex-row gap-5 h-10">
                <input
                  type="text"
                  placeholder="Enter a new todo..."
                  className="flex h-full w-full rounded-md border border-input bg-transparent px-3 py-1 text-base 
                    shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 
                    focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  onChange={(e) => setText(e.target.value)}
                  onClick={handleAddTodo}
                />
                <Button buttonType="addBtn"/>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-600">Completed todos will go here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
