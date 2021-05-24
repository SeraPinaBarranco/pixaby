import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {
  texto='';
  mostrar=false;
  subcripcion:Subscription;

  constructor(private _imagenService: ImagenService) { 
    this.subcripcion = this._imagenService.getError().subscribe(data=>{
      this.errorMensaje();
      this.texto = data;
    });
  }
  
  ngOnInit(): void {
  }
  
  errorMensaje(){
    this.mostrar=true;
    setTimeout(() => {
      this.mostrar=false;
    }, 2000);
  }

  ngOnDestroy():void{
    this.subcripcion.unsubscribe();
  }
}
