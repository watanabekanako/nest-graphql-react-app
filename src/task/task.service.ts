import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;

    const task: Task = {
      id: this.tasks.length + 1,
      name,
      dueDate,
      status: 'NOT_STARTED',
      description,
    };
    this.tasks.push(task);
    return task;
  }
}
