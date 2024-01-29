import { Component } from '@angular/core';
import { IContent } from "../../models/IContent";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    ContentListItemComponent
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {
  airplaneList: IContent[] = [
    {
      name: 'Boeing 747',
      imgSrc: 'assets/',
      description: 'The Boeing 747 is a commonly used passenger plane with over 300 seats.',
      author: '',
      type: 'Commercial',
      tags: ['Boeing', 'Airplane', 'Commercial'],
    },
    {
      name: 'F-35',
      imgSrc: 'assets/',
      description: 'The F-35 is a highly-advanced US Military fighter jet.',
      author: '',
      type: 'Military',
      tags: ['F-35', 'Fighter Jet', 'Military'],
    },
    {
      name: 'Airbus A380',
      imgSrc: 'assets/',
      description: 'The Airbus A380 is the biggest passenger airliner with over 500 seats..',
      author: '',
      type: 'Commercial',
      tags: ['Airbus', 'A380', 'Commercial'],
    },
    {
      name: 'Concorde',
      imgSrc: 'assets/',
      description: 'The Concorde was a super-sonic passenger aircraft created in France.',
      author: '',
      type: 'Commercial',
      tags: ['Concorde', 'France', 'Supersonic Flight'],
    }
  ]
}
