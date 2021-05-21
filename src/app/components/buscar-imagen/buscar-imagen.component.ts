import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {
  nombreImagen:string;

  constructor() {
    this.nombreImagen="";
  }

  ngOnInit(): void {
  }

  buscarImagenes(){
    console.log(this.nombreImagen);
  }

}
