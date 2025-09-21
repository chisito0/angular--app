import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent {
  nuevaTarea: string = '';
  editIndex: number | null = null;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Revisar si venimos con un id en la URL
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.editIndex = +params['id']; // convertir a número
        this.nuevaTarea = this.taskService.getTareas()[this.editIndex];
      }
    });
  }

  guardarTarea() {
    if (this.nuevaTarea.trim()) {
      if (this.editIndex !== null) {
        // Editando tarea existente
        this.taskService.editarTarea(this.editIndex, this.nuevaTarea);
      } else {
        // Nueva tarea
        this.taskService.agregarTarea(this.nuevaTarea);
      }
      this.router.navigate(['/tasks']);
    }
  }
}
