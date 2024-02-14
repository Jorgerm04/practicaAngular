import { Component, Input } from '@angular/core';
import { PLANTS } from '../mock-plants';
import { NgFor, NgIf } from '@angular/common';
import { PlantFormComponent } from '../plant-form/plant-form.component';
import { Plant } from '../models/plant.interface';
import { PlantsService } from '../services/plants.service';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [NgFor,PlantFormComponent,NgIf],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent {
@Input() plants: Plant[] = [];

constructor(private plantService:PlantsService){
}

public deletePlant(plantName:String):void{
  this.plantService.deletePlant(plantName);
}

public favoritePlant(plant:Plant):void{
    plant.favorite= !plant.favorite;
}

}
