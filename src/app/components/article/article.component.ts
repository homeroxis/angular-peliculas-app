import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
    // viene del modelo
    public article: Article;
    public url: string;

    constructor(private _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) {
        this.url = Global.url;
    }

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            let id = params['id'];
            this._articleService.getArticle(id).subscribe(
                (response) => {
                    if (response.article) {
                        this.article = response.article;
                    } else {
                        this._router.navigate(['/home']);
                    }
                },
                (error) => {
                    console.log(error);
                    this._router.navigate(['/home']);
                }
            );
        });
    }
}
