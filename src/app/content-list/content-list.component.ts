import { Component } from '@angular/core';
import { IAircraft } from "../../models/IAircraft";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    ContentListItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})

/**
 * Creating an array of IAircraft objects
 */
export class ContentListComponent {
  // airplaneList: IAircraft[] = [
  //   {
  //     name: 'Boeing 747',
  //     imgSrc: 'assets/b747.jpg',
  //     description: 'The Boeing 747 is a commonly used passenger plane with over 300 seats.',
  //     author: 'Image by WikimediaImages from Pixabay',
  //     type: 'Commercial',
  //     tags: ['Boeing', 'Airplane', 'Commercial'],
  //   },
  //   {
  //     name: 'F-35',
  //     imgSrc: 'assets/f35.jpg',
  //     description: 'The F-35 is a highly-advanced US Military fighter jet.',
  //     author: 'Image by WikiImages from Pixabay',
  //     type: 'Military',
  //     tags: ['F-35', 'Fighter Jet', 'Military'],
  //   },
  //   {
  //     name: 'Airbus A380',
  //     imgSrc: 'assets/a380.jpg',
  //     description: 'The Airbus A380 is the biggest passenger airliner with over 500 seats..',
  //     author: 'Image by Pit Karges from Pixabay',
  //     type: 'Commercial',
  //     tags: ['Airbus', 'A380', 'Commercial'],
  //   },
  //   {
  //     name: 'Concorde',
  //     imgSrc: 'assets/concorde.jpg',
  //     description: 'The Concorde was a super-sonic passenger aircraft created in France.',
  //     author: 'Image by Chris Jones from Pixabay',
  //     type: 'Commercial',
  //     tags: ['Concorde', 'France', 'Supersonic Flight'],
  //   }
  // ]
}
