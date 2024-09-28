import {Component, Input} from '@angular/core';
import {Dog} from "../shared/models/Dog";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {
  @Input() title: string = "";
  @Input() dogs: Dog[] = [];

  displayedColumns: string[] = ['name', 'heightInCm', 'isAlive'];

  addRandom() {
    this.dogs = [...this.dogs, new Dog(this.getRandomName(), this.getRandomHeight(), this.getRandomLive())];
  }

  getRandomName(): string {
    const names = ['Rex', 'Rona', 'Milo', 'Shadow', 'Buddy'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  getRandomHeight(): number {
    return Math.floor(Math.random() * 60) + 20;
  }

  getRandomLive(): boolean {
    return Math.random() > 0.5;
  }

  bark(): void {
    alert("Dogs doesn't bark always");
  }
}
