import { Response } from 'src/shared/models/Response';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Response> {
    let tasks = window.localStorage.getItem('tasks');
    let response = new Response();
    response.statusCode = 200;
    response.message = tasks ? 'Tasks fetched successfully.' : 'No task found.';
    response.data = tasks ? JSON.parse(tasks) : [];
    return of(response); //tasks ? of(JSON.parse(tasks)) : of([]);
  }

  addTask(task: Task): Observable<Response> {
    let taskStorage = window.localStorage.getItem('tasks');
    let tasks = taskStorage ? JSON.parse(taskStorage) : [];
    tasks.push(task);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));

    let response = new Response();
    response.statusCode = 200;
    response.message = 'New task added successfully';

    return of(response);
  }

  editTask(id: string, task: string): Observable<Response> {
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

    let response = new Response();
    response.statusCode = 200;
    response.message = 'Task updated successfully!';
    return of(response);
  }

  deleteTask(id: string): Observable<Response> {
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

    let response = new Response();
    response.statusCode = 200;
    response.message = 'Task deleted successfully.';
    return of(response);
  }

  completeTask(id: string): Observable<Response> {
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

    let response = new Response();
    response.statusCode = 200;
    response.message = 'Task has been marked completed.';
    return of(response);
  }
}
