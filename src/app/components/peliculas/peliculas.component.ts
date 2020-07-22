import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
    selector: 'app-peliculas',
    templateUrl: './peliculas.component.html',
    providers: [PeliculaService],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public peliculas: Pelicula[];
    public favorita: Pelicula;
    public fecha: any;

    constructor(private _peliculaService: PeliculaService) {
        this.titulo = 'Componente Películas';
        this.peliculas = this._peliculaService.getPeliculas();
        this.fecha = new Date(2020, 8, 12);
    }

    ngOnInit() {
        console.log('OnInit cargado');
        console.log(this.peliculas);
        console.log(this._peliculaService.holaMundo());
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
