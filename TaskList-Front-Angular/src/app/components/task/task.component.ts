import { Component } from '@angular/core';
import { TaskMock } from 'src/app/service/task-mock';
import { TaskServiceService } from 'src/app/service/task-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  x: any;
  tasks: any;
  taskModel!: TaskMock;
  taskInEdit: any = '';

  form: FormGroup = this.fb.group({
    id_task: '',
    name: [],
    details: [],
    state: [false],
  });

  constructor(
    private taskService: TaskServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.taskService.getAll().subscribe({
      next: (response) => {
        this.tasks = response;
        console.log('getAll trae : ', this.tasks);
      },
      error: (err) => {
        console.log('error al traer datos : ', err);
      },
    });
  }

  save() {
    this.taskService.create(this.form.value).subscribe({
      next: (response) => {
        this.getAll();
        console.log('respuesta : ', response);
      },
      error: (err) => {
        console.log('ERROR EN SAVE() : ', err);
      },
    });
  }

  delete(id: any) {
    console.log('delete function : ' + id);
    const ok = confirm('Seguro de borrar?');
    if (ok) {
      this.taskService.delete(id).subscribe({
        next: (response) => {
          console.log('Delete exitoso : ', response);
          this.getAll();
        },
        error: (err) => {
          console.log('error en el delete : ', err);
          this.getAll();
        },
      });
    }
    this.form.reset({ state: false });
    this.taskInEdit = '';
  }

  update(task: any) {
    console.log('update', task);
    this.taskInEdit = task;
    this.form.setValue({
      name: task.name,
      details: task.details,
      state: task.state,
    });
    this.taskInEdit = this.form.value;
  }

  saveOrUpdate() {
    //update
    if (this.taskInEdit) {
      console.log('entro a update');
      let task = this.form.value;
      this.taskService.update(task).subscribe({
        next: (response) => {
          console.log('update exitoso : ', response);
          this.getAll();
        },
        error: (err) => {
          console.log('error en el update : ', err);
          this.getAll();
        },
      });
    }
    //save
    else {
      console.log('entro a save');
      this.taskService.create(this.form.value).subscribe({
        next: (response) => {
          this.getAll();
          console.log('respuesta : ', response);
        },
        error: (err) => {
          console.log('ERROR EN SAVE() : ', err);
        },
      });
    }

    this.taskInEdit = '';
    this.form.reset({ state: false });
  }

  setForm(task: any) {
    console.log('update : ', task);
    this.taskInEdit = task;
    this.form.setValue({
      id_task: task.id_task,
      name: task.name,
      details: task.details,
      state: task.state,
    });
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
