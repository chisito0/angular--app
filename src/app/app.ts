import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],   // 👈 añadir RouterModule aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
