import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  private taskSub: Subscription;

  constructor(public taskService: TaskService){}

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList(): void{
    this.taskSub = this.taskService.getTaskUpdateListner().subscribe((tasks: Task[]) => {
      this.taskList = tasks;
    });
  }

  onDelete(taskId: number){
    this.taskService.deleteTask(taskId);
  }

}
