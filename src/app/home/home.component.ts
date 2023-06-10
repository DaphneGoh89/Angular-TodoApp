import { Component, OnInit } from '@angular/core';
import { Response } from 'src/shared/models/Response';
import { Task } from 'src/shared/models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  task: string = '';
  submitResponse: Response = new Response();
  tasks: Task[] = [];

  ngOnInit(): void {}

  onSubmit() {
    if (this.task === '') {
      this.submitResponse.isError = true;
      this.submitResponse.message = 'Task cannot be empty.';
      return;
    }

    let newTask = new Task();
    newTask.task = this.task;
    this.tasks.push(newTask);
    this.task = '';
    this.submitResponse.message = 'Task submitted successfully.';
  }

  onEdit(id: number) {
    if (!this.tasks[id].completed) this.tasks[id].inEditMode = true;
  }

  onSaveEdit(id: number) {
    this.tasks[id].inEditMode = false;
  }

  onComplete(id: number) {
    if (!this.tasks[id].completed) this.tasks[id].completed = true;
  }

  onDelete(id: number) {
    this.tasks.splice(id, 1);
  }
}
