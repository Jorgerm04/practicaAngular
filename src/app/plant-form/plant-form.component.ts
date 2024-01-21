import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { PlantsService } from '../services/plants.service';
import { Plant } from '../models/plant.interface';
import { ImageSelectorComponent } from '../image-selector/image-selector.component';

@Component({
  selector: 'app-plant-form',
  standalone: true,
  imports: [FormsModule,ImageSelectorComponent],
  templateUrl: './plant-form.component.html',
  styleUrl: './plant-form.component.css'
})
export class PlantFormComponent {

  plant: Plant = { name: '', type: '' ,favorite:false};

  public selectType(type: string): void {

    if (type === this.plant.type) {
      this.plant.type = '';
      console.log('Ningun tipo seleccionado');
    } else {
      this.plant.type = type;
    }

  }

  public clearForm(): void {
    this.plant = { name: '', type: '' ,favorite:false};
  }

  @Output() createdPlant:EventEmitter<Plant> = new EventEmitter();

  public savePlant(): void {
    if (this.plant.name && this.plant.type) {
      this.createdPlant.emit(this.plant);
      this.clearForm();
    }
  }

  
}
