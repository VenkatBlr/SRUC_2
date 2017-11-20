import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    albumName = ['Event 2015',
                'Event 2016',
                'Event 2017',
                'Event 2018'];

imgUrl = [`./assets/img/Ramaphotos/rama5.jpg`,
            `./assets/img/Ramaphotos/rama2.jpg`,
            `./assets/img/Ramaphotos/rama3.jpg`,
            `./assets/img/Ramaphotos/rama4.jpg`];

    constructor(private router: Router, private route: ActivatedRoute) { }
    ngOnInit() {}

    onclk(eventName){

        this.router.navigate(['../blank-page',{AlbumName:eventName}], { relativeTo: this.route });

    }
}
