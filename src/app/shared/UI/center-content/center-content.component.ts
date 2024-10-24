import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-center-content',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './center-content.component.html',
  styleUrl: './center-content.component.css'
})
export class CenterContentComponent {

}
