import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [ArticleService],
})
export class HomeComponent implements OnInit {
    public title: string;
    // viene del modelo
    public articles: Article[];

    homeText = 'Bienvenido al Curso de Angular';

    constructor(private _articleService: ArticleService) {
        this.title = 'Últimos Artículos';
    }

    ngOnInit() {
        this._articleService.getArticles(true).subscribe(
            (response) => {
                if (response.articles) {
                    this.articles = response.articles;
                    console.log(this.articles);
                } else {
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
