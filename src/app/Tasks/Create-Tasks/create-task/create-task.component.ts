import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(public taskService: TaskService){}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      return;
    }

    this.taskService.addTask(form.value.taskInputField);
   form.resetForm();
  }

}
