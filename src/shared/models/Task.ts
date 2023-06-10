export class Task {
  taskDate: Date = new Date();
  task!: string;
  completed: boolean = false;
  inEditMode: boolean = false;
}
