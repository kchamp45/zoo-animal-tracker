import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="filter">
    <label>View by maturity</label><br>
    <select (change)="onFilterAgeChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="young">Young Animals</option>
      <option value="mature">Mature Animals</option>
     </select>
   </div>
   <hr>
   <div class="filter2">
    <label>View by diet</label><br>
    <select (change)="onFilterDietChange($event.target.value)">
       <option value="allAnimals" selected="selected">All Animals</option>
       <option value="plants">Plant eaters</option>
       <option value="meat">Meat lovers</option>
       <option value="everything">Plants & Meat</option>
    </select>
  </div>
<hr>
  <ul>
    <div *ngFor = "let animal of childAnimalList | maturity:filterByAge | diet:filterByDiet" >
      <div class="col-md-3">
      <div class="well">
          <h3> Species: {{animal.species}} </h3>
          <h4> Name: <strong> {{animal.name}}</strong></h4>
          <h4> Age: {{animal.age}} years old </h4>
          <h4 [class]="dietColor(animal)"> Diet: {{animal.diet}} </h4>
          <h4> Location: {{animal.location}} </h4>
          <h4> Number of Caretakers: {{animal.numCaretaker}} </h4>
          <h4> Gender: {{animal.gender}} </h4>
          <h4> Likes: {{animal.likes}} </h4>
          <h4> Dislikes: {{animal.dislikes}} </h4>
          <button class="btn btn-success" (click)="editAnimalClicked(animal)">Edit</button>
      </div>
      </div>
   </div>
  </ul>
  `
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string;
  filterByDiet: string;

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
    this.clickSender.emit(clickedAnimal);
  }

  onFilterAgeChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }
  onFilterDietChange(optionFromMenu){
    this.filterByDiet = optionFromMenu;
  }

}
