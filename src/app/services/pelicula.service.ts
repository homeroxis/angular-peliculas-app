import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {
  public peliculas: Pelicula[];

  constructor() {
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
  }

  holaMundo() {
    return 'Hola mundo desde un servicio de Angular!!!';
  }

  getPeliculas() {
    return this.peliculas;
  }
}
