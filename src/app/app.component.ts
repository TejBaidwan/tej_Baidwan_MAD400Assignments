import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//import { Aircraft } from '../models/Aircraft';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//Creating array of Aircraft data types to use
export class AppComponent {
  title = '';
  //aircraft = [
    //new Aircraft("747-400", 416, 4, true, "February 22nd, 2024"),
    //new Aircraft("DC-10", 270, 3),
    //new Aircraft("A380", 525, 4, true)
  //]

  //This empty array init can be used to test the ngif directive in app.component.html
  //aircraft: Aircraft[] = [];
}


