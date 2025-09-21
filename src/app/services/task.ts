import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tareas: string[] = [];

  constructor() {
    // Al iniciar, cargar las tareas guardadas en LocalStorage
    const data = localStorage.getItem('tareas');
    if (data) {
      this.tareas = JSON.parse(data);
    }
  }

  private guardarEnLocalStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  getTareas(): string[] {
    return this.tareas;
  }

  agregarTarea(tarea: string) {
    this.tareas.push(tarea);
    this.guardarEnLocalStorage();
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
    this.guardarEnLocalStorage();
  }

  editarTarea(index: number, nuevaTarea: string) {
    this.tareas[index] = nuevaTarea;
    this.guardarEnLocalStorage();
  }

}
