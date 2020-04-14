import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private updatedTasks = new BehaviorSubject<Task[]>([]);

  constructor() { }

  //Listner
  getTaskUpdateListner() {
    return this.updatedTasks.asObservable();
  }

  //Adding a task
  addTask(todo: string){
    const id = new Date().valueOf();
    const task: Task = {
      id: id,
      todo: todo
    }
    let newTaskList = [...this.updatedTasks.value];
    newTaskList.push(task);
    this.updatedTasks.next(newTaskList);
  }

  //Delete a task
  deleteTask(taskId: number) {
    let newTaskList = [...this.updatedTasks.value];
    newTaskList = newTaskList.filter(el => el.id != taskId);
    this.updatedTasks.next(newTaskList);
  }
}
