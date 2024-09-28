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

  dogData(): Dog[] {
    let dogs: Dog[] = [];

    dogs.push(new Dog("Jack", 120, true));
    dogs.push(new Dog("Julie", 100, false));

    return dogs;
  }

  ngOnInit(): void {
    this.dogsGlobal = this.dogData();
  }
}
