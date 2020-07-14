import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor() {
    this.titulo = 'Componente Películas';
    this.peliculas = [
      new Pelicula(
        2009,
        'Watchmen',
        'https://indiehoy.com/wp-content/uploads/2019/09/watchmen-serie-hbo-1200x647.jpg'
      ),
      new Pelicula(
        2008,
        'Wall-e',
        'https://i.pinimg.com/originals/34/30/87/34308781a9d63dce1fab06ceedb7f4e3.jpg'
      ),
      new Pelicula(
        2015,
        'Chappie',
        'https://i.blogs.es/154975/chappie-poster/1366_2000.jpg'
      ),
      new Pelicula(
        2018,
        'Bumblebee',
        'https://i.blogs.es/f6cbc7/cartel-bumblebee/2560_3000.jpg'
      ),
    ];
    this.fecha = new Date(2020, 8, 12);
  }

  ngOnInit(): void {
    console.log('OnInit cargado');
    console.log(this.peliculas);
  }
  ngDoCheck() {
    console.log('DoCheck Lanzado');
  }
  cambiarTitulo() {
    this.titulo = 'El título ha sido cambiado';
  }
  ngOnDestroy() {
    console.log('El componente se va adestruir');
  }
  mostrarFavorita(event) {
    this.favorita = event.pelicula;
    console.log(event.pelicula);
  }
}
