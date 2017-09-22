import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onFilterAgeChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animalss</option>
      <option value="young">Young Animals</option>
      <option value="mature">Mature Animals</option>
 </select>
 <hr>

  <ul>

    <div *ngFor = "let animal of childAnimalList | maturity:filterByAge >
    <div class="col-md-3">
    <div class="well">
        <h3> Species: {{animal.species}} </h3>
        <h4> Name: <strong> {{animal.name}}</strong></h4>
        <h4> Age: {{animal age}} years old </h4>
        <h4 [class]="dietColor(animal)"> Diet: {{animal.diet}} </h4>
        <h4> Location: {{animal.location}} </h4>
        <h4> Number of Caretakers: {{animal.numCaretaker}} </h4>
        <h4> Gender: {{animal.sex}} </h4>
        <h4> Likes: {{animal.likes}} </h4>
        <h4> Dislikes: {{animal.dislikes}} </h4>
        <button (click)="editKegClicked(keg)">Edit</button>
        <h4> Has been fed today: {{animal.fed}} </h4>
    </div>
    </div>
   </div>
  </ul>
  `
})

export class AnimalListComponent {
  
  @Input() childAnimalList: Animal[];
  @Output() editClickSender = new EventEmitter();
  filterByAge: string;

  dietColor(animal){
    if (animal.diet == "Carnivore" ){
      return "red";
    } else if(animal.diet == "Herbivore") {
      return "green";
    } else if (animal.diet == "Omnivore"){
      return "blue";
    }
  }

  editAnimalClicked(clickedAnimal: Animal){
    this.editClickSender.emit(clickedAnimal);
  }

  onFilterAgeChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

}
