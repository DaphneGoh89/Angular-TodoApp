import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] | [] {
    let tasks = window.localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(task: Task): void {
    let taskStorage = window.localStorage.getItem('tasks');
    let tasks = taskStorage ? JSON.parse(taskStorage) : [];

    tasks.push(task);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  editTask(id: string, task: string): void {
    let taskStorage = window.localStorage.getItem('tasks');
    if (!taskStorage) {
      throw new Error('No task found!');
    }

    let tasks = JSON.parse(taskStorage);
    let index = tasks.findIndex(
      (task: { taskId: string }) => task.taskId == id
    );
    if (index === -1) {
      throw new Error('Task ID not found!');
    }

    tasks[index].task = task;
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask(id: string): void {
    let taskStorage = window.localStorage.getItem('tasks');
    if (!taskStorage) {
      throw new Error('No task found!');
    }

    let tasks = JSON.parse(taskStorage);
    let index = tasks.findIndex(
      (task: { taskId: string }) => task.taskId == id
    );

    if (index === -1) {
      throw new Error('Task ID not found!');
    }

    tasks.splice(index, 1);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  completeTask(id: string) {
    let taskStorage = window.localStorage.getItem('tasks');
    if (!taskStorage) {
      throw new Error('No task found!');
    }

    let tasks = JSON.parse(taskStorage);
    let index = tasks.findIndex(
      (task: { taskId: string }) => task.taskId == id
    );
    if (index === -1) {
      throw new Error('Task ID not found!');
    }

    tasks[index].completed = true;
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
