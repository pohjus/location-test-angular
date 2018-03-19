import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import Location from '../location';

@Component({
  selector: 'app-locationtable',
  templateUrl: 'locationtable.component.html',
  styleUrls: ['locationtable.component.css']
})
export class LocationtableComponent {
  private static AMOUNT_OF_LOCATIONS = 5;

  locations: Location[] = [];
  latitude: number;
  longitude: number;

  constructor() {
    this.generateRandomLocations();
  }

  add() {
    try {
      const loc: Location = new Location();
      loc.latitude = this.latitude;
      loc.longitude = this.longitude;
      this.locations.push(loc);
    } catch (exception) {
      alert('Invalid values given');
    }
    this.latitude = undefined;
    this.longitude = undefined;
  }
  generateRandomLocations(): void {
    for (let i = 0; i < LocationtableComponent.AMOUNT_OF_LOCATIONS; i++) {
      this.locations.push(new Location());
    }
  }

  delete(location: Location) {
    let removalIndex = -1;
    for (let index = 0; index < this.locations.length; index++) {
      if (this.locations[index].id === location.id) {
        removalIndex = index;
      }
    }
    if (removalIndex !== -1) {
      this.locations.splice(removalIndex, 1);
    }
  }

}
