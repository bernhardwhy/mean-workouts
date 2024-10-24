import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { ProgramsComponent } from "./programs/programs.component";
import { CenterContentComponent } from "./shared/UI/center-content/center-content.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProgramsComponent, CenterContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  enteredValue = signal<string>('');

  onSubmit() {
    console.log(this.enteredValue());
  }
}
