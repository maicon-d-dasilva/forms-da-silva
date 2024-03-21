import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-da-silva';

  studentObject = [{
    nombre: "Marty McFly",
    calificacion: 6,
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/36.jpg",
    localidad: "ext"
  },
  {
    nombre: "Jane Doe",
    calificacion: 10,
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/16.jpg",
    localidad: "capital"
  },
  {
    nombre: "Lorenzo Banderas",
    calificacion: 3,
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/26.jpg",
    localidad: "capital"
  },
  {
    nombre: "Anotnio Lamas",
    calificacion: 7,
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/11.jpg",
    localidad: "int"
  },
  {
    nombre: "John Doe",
    calificacion: 8,
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/56.jpg",
    localidad: "int"
  }

]

obtenerEscala(calificacion: number){
  let codigoColor: string = "white"
  if (calificacion < 6){
    codigoColor = "btn btn-danger rounded-pill px-3"
  }else if (calificacion >= 7 && calificacion <=8) {
    codigoColor = "btn btn-primary rounded-pill px-3"
  } else if (calificacion === 6) {
    codigoColor = "btn btn-warning rounded-pill px-3"
  } else {
    codigoColor = "btn btn-success rounded-pill px-3"
  }
  return codigoColor
}

}
