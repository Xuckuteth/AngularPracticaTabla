import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

isHabilitado: boolean = true;
estudiantes: Estudiante[] = [
  {codigo: 1, nombre: 'Estiven', apellido: 'Montoya', nota: 5, observacion: 'Aprobo'},
  {codigo: 2, nombre: 'Sebastian', apellido: 'Castro', nota: 4.2, observacion: 'Aprobo'},
  {codigo: 3, nombre: 'Samuel', apellido: 'Urrego', nota: 2.9, observacion: 'Reprobo'},
  {codigo: 4, nombre: 'Juan', apellido: 'Rodriguez', nota: 3.7, observacion: 'Aprobo'},
  {codigo: 5, nombre: 'Ximena', apellido: 'Franco', nota: 4.6, observacion: 'Aprobo'},
  {codigo: 6, nombre: 'Carolina', apellido: 'Gonzales', nota: 3.2, observacion: 'Aprobo'},
  {codigo: 7, nombre: 'Camilo', apellido: 'Valencia', nota: 1.4, observacion: 'Reprobo'},
  {codigo: 8, nombre: 'Victor', apellido: 'Bolivar', nota: 3.5, observacion: 'Aprobo'},
  {codigo: 9, nombre: 'Esteban', apellido: 'Quintero', nota: 0.8, observacion: 'Reprobo'},
  {codigo: 10, nombre: 'Diego', apellido: 'Garcia', nota: 4.4, observacion: 'Aprobo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }
habilitar(): void{
  if (this.isHabilitado){
    this.isHabilitado = false;
  } else{
this.isHabilitado = true;
  }
}
}

