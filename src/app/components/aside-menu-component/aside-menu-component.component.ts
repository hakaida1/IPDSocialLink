
import { Component, OnInit } from '@angular/core';
import { Suggestion } from './../../Models/Suggest';


@Component({
  selector: 'app-aside-menu-component',
  templateUrl: './aside-menu-component.component.html',
  styleUrls: ['./aside-menu-component.component.scss']
})
export class AsideMenuComponentComponent implements OnInit {
  year = new Date().getFullYear()

  constructor() { }

  suggestions : Suggestion[] = [

    new Suggestion('henni_mohamed_off' , 'assets/img/henni.jpg'),
    new Suggestion('leomessi','assets/img/messi.jpg'), 
    new Suggestion('sadiomaneofficiel','assets/img/sadio.jpg'),
    new Suggestion('realdonaldtrump','assets/img/trump.jpg'),

  ]
  ngOnInit(): void {
  }

}



