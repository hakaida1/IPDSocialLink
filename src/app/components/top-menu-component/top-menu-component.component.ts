import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu-component',
  templateUrl: './top-menu-component.component.html',
  styleUrls: ['./top-menu-component.component.scss']
})
export class TopMenuComponentComponent implements OnInit {

  
  IPDLogo: string =  '../../../assets/img/ipd.png'
  userImage: string = '../../../assets/img/ipd.png'
  constructor() { }

  ngOnInit(): void {
  }

}
