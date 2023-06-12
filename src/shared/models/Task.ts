export class Task {
  taskId!: string;
  taskDate: Date = new Date();
  task!: string;
  completed: boolean = false;
  inEditMode: boolean = false;
}
