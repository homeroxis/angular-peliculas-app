import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from 'src/app/services/global';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    providers: [ArticleService],
})
export class BlogComponent implements OnInit {
    // viene del modelo
    public articles: Article[];
    public url: string;

    constructor(private _articleService: ArticleService) {
        this.url = Global.url;
    }

    ngOnInit() {
        this._articleService.getArticles().subscribe(
            (response) => {
                if (response.articles) {
                    this.articles = response.articles;
                } else {
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
