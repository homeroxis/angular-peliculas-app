import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
    selector: 'app-article-new',
    templateUrl: './article-new.component.html',
    styles: [],
})
export class ArticleNewComponent implements OnInit {
    public article: Article;

    constructor() {
        this.article = new Article('', '', '', null, null);
    }

    ngOnInit(): void {}

    onSubmit() {
        console.log(this.article);
    }
}
