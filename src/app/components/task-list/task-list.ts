import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {
  constructor(public taskService: TaskService) {}

  get tareas() {
    return this.taskService.getTareas();
  }

  eliminarTarea(index: number) {
    this.taskService.eliminarTarea(index);
  }
}
