import { Component, OnInit } from '@angular/core';
import { Task } from 'src/shared/models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  task: string = '';
  formSubmissionMsg = '';
  tasks: Task[] = [];

  ngOnInit(): void {}

  onSubmit() {
    if (this.task === '') {
      this.formSubmissionMsg = 'Task cannot be empty.';
      return;
    }

    let newTask = new Task();
    newTask.task = this.task;
    this.tasks.push(newTask);
    this.task = '';
    this.formSubmissionMsg = 'Task submitted successfully.';
  }

  onComplete(id: number) {
    this.tasks[id].completed = true;
  }

  onDelete(id: number) {
    this.tasks.splice(id, 1);
  }
}
