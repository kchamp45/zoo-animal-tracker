import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Wonderful Zoo</h1>
    <div class="panel">
    <img src="/resources/images/otter.jpg" alt="Picture of an Otter">
    </div>
    <new-animal (newAnimalSender)="addAnimal($event)"> </new-animal>
    <div class="row">
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    </div>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (editDoneButtonClickedSender)="doneEditing()"> </edit-animal>
  </div>
  `
})

export class AppComponent{

  masterAnimalList: Animal[] = [
    new Animal('Artic Fox', 'Moonshine', 3, 'Carnivore', 'Northern Trail', 3, 'Female', 'pop music', 'snotty kids'),
    new Animal('Ocelot', 'Price Charming', 1, 'Omnivore', 'Tropical Rain Forest Building', 5, 'Male', 'getting fat', 'Sundays'),
    new Animal('Black Deer', 'Belle', 8, 'Herbivore', 'South Trail', 2, 'Female', 'hairy beast', 'arrogant men')
  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  doneEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
