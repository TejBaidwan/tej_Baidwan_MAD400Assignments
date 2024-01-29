import {Component, Input} from '@angular/core';
import { IAircraft } from "../../models/IAircraft";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() contentItem?: IAircraft;
}
