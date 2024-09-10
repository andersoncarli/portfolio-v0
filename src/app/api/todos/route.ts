import { NextResponse } from 'next/server'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let todos: Todo[] = []

export async function GET() {
  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  const { text } = await request.json()
  const newTodo: Todo = { id: Date.now(), text, completed: false }
  todos.push(newTodo)
  return NextResponse.json(newTodo, { status: 201 })
}

export async function PUT(request: Request) {
  const { id, completed } = await request.json()
  todos = todos.map(todo => todo.id === id ? { ...todo, completed } : todo)
  return NextResponse.json({ message: 'Todo updated' })
}
