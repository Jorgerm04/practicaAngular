import { Injectable } from '@angular/core';
import { Plant } from '../models/plant.interface';
import { PLANTS } from '../mock-plants';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor() { 
    this.sortPlants();
  }

  private plants:Plant[] = PLANTS;


  public getPlants(): Plant[] {
    return this.plants;
  }

  savePlant(plant:Plant): void {
    this.plants.push(plant);
    this.sortPlants();
  }

  deletePlant(plantName:String): void {
      const index = this.plants.findIndex((plant) => plant.name === plantName);
      console.log(index);
      this.plants.splice(index,1)
  }

  sortPlants(): void {
    this.plants.sort( (a, b) => a.name.localeCompare(b.name));
  }

}
