import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { Plant } from './models/plant.interface';
import { PLANTS } from './mock-plants';
import { PlantsService } from './services/plants.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PlantFormComponent, PlantListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaAngular';

  constructor(private plantsService: PlantsService) {}

  plants: Plant[] = PLANTS;

  onPlantCreated(newPlant: Plant): void {
    this.plantsService.savePlant(newPlant);
  }
}
