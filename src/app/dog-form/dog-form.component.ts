import { Component } from '@angular/core';
import {Dog} from "../shared/models/Dog";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrl: './dog-form.component.css'
})
export class DogFormComponent {
  dogs: Dog[] = [];

  name: string = "";
  heightInCm: number = 0;
  alive: string = "";

  addDog(dogForm: NgForm) {
    this.dogs.push(new Dog(this.name, this.heightInCm, this.alive == 'yes'));
    dogForm.reset();
  }
}
