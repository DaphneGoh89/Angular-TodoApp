import { TaskService } from './../../shared/services/task.service';
import { Component, OnInit } from '@angular/core';
import { Response } from 'src/shared/models/Response';
import { Task } from 'src/shared/models/Task';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private readonly _taskService: TaskService;
  task: string = '';
  tasks: Task[] = [];

  // To move this to a new class if possible cause this should be reusable component
  submitResponse: Response = new Response();

  // get taskGroupedByDate(): any {
  //   return this.groupTasksByDate(this.tasks);
  // }

  constructor(private taskService: TaskService) {
    this._taskService = taskService;
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
  }

  onSubmit() {
    if (this.task === '') {
      this.submitResponse.isError = true;
      this.submitResponse.message = 'Task cannot be empty.';
      return;
    }

    let newTask = new Task();
    newTask.task = this.task;
    newTask.taskId = uuidv4();
    this._taskService.addTask(newTask);
    // this.tasks.push(newTask);
    // by right should have waited until success response is received before displaying success message
    this.task = '';
    this.submitResponse.message = 'Task submitted successfully.';
  }

  onEdit(id: string) {
    let index = this.tasks.findIndex((task) => task.taskId === id);
    if (!this.tasks[index].completed) this.tasks[index].inEditMode = true;
  }

  onSaveEdit(id: string) {
    let index = this.tasks.findIndex((task) => task.taskId === id);
    let newTaskDescription = this.tasks[index].task;
    this._taskService.editTask(id, newTaskDescription);
    this.tasks[index].inEditMode = false;
  }

  onComplete(id: string) {
    this._taskService.completeTask(id);
  }

  onDelete(id: string) {
    try {
      this._taskService.deleteTask(id);
    } catch (e: any) {
      console.log(e?.message);
    }

    // let index = this.tasks.findIndex((task) => task.taskId === id);
    // this.tasks.splice(index, 1);
  }

  // groupTasksByDate(list: Array<Task>, property: string = 'taskDate'): any {
  //   console.log('home component list', list);

  //   const groupedList: any = list.reduce((previous: any, current) => {
  //     let taskDate = current.taskDate.toISOString().split('T')[0];

  //     if (!previous.hasOwnProperty(taskDate)) {
  //       previous[taskDate] = [];
  //     }

  //     // if (!previous[current[property]]) {
  //     //   previous[current[property]] = [];
  //     // }
  //     previous[taskDate].push(current);

  //     return previous;
  //   }, {});
  //   console.log('grouptasksbydate', groupedList);

  //   return Object.keys(groupedList).map((date) => ({
  //     date: date,
  //     tasks: groupedList[date],
  //   }));
  // }
}
