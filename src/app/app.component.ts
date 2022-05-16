import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify';

  // Tipos de Datos TypeScript
  name:string = 'stevee'
  edad:number = 25
  phone: null= null
  phone1: undefined = undefined
  datum: any = 12

  status: string|number = 'fail'

  car: CarModel = {
    brand: 'Ford',
    model: 'Focus',
    year: 2021
  }

  listCars: Array<CarModel> = [
    {
      brand:'crevrolet',
      model: 'Camaro',
      year: 2021
    },
    {
      brand:'BMW',
      model: 'Corsa',
      year: 2022
    }
  ] 
  
}

interface CarModel {
  brand: string;
  model: string;
  year?: number;
}
