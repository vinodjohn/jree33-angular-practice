import {Component, OnInit} from '@angular/core';
import {Dog} from "./shared/models/Dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Vinod John';
  subTitle = 'I am a Java Developer';

  dogTitle = 'List of dogs';
  dogsGlobal: Dog[] = [];
  displayedColumns: string[] = ['name', 'heightInCm', 'isAlive'];


  dogData(): Dog[] {
    let dogs: Dog[] = [];

    dogs.push(new Dog("Jack", 120, true));
    dogs.push(new Dog("Julie", 100, false));

    return dogs;
  }

  bark(): void {
    alert("Dogs doesn't bark always");
  }

  ngOnInit(): void {
    this.dogsGlobal = this.dogData();
  }

  addRandom() {
    this.dogsGlobal = [...this.dogsGlobal, new Dog(this.getRandomName(), this.getRandomHeight(), this.getRandomLive())];
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
}
