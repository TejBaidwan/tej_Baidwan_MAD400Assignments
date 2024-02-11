import {IAircraft} from "../../../models/IAircraft";

export const AIRCRAFTLIST: IAircraft[] = [
  {
    id: 1,
    name: 'Boeing 747',
    imgSrc: 'assets/b747.jpg',
    description: 'The Boeing 747 is a commonly used passenger plane with over 300 seats.',
    author: 'Image by WikimediaImages from Pixabay',
    type: 'Commercial',
    tags: ['Boeing', 'Airplane', 'Commercial'],
  },
  {
    id: 2,
    name: 'F-35',
    imgSrc: 'assets/f35.jpg',
    description: 'The F-35 is a highly-advanced US Military fighter jet.',
    author: 'Image by WikiImages from Pixabay',
    type: 'Military',
    tags: ['F-35', 'Fighter Jet', 'Military'],
  },
  {
    id: 3,
    name: 'Airbus A380',
    imgSrc: 'assets/a380.jpg',
    description: 'The Airbus A380 is the biggest passenger airliner with over 500 seats..',
    author: 'Image by Pit Karges from Pixabay',
    type: 'Commercial',
    tags: ['Airbus', 'A380', 'Commercial'],
  },
  {
    id: 4,
    name: 'Concorde',
    imgSrc: 'assets/concorde.jpg',
    description: 'The Concorde was a super-sonic passenger aircraft created in France.',
    author: 'Image by Chris Jones from Pixabay',
    type: 'Commercial',
    tags: ['Concorde', 'France', 'Supersonic Flight'],
  }
]
