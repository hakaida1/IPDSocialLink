import { Component,Input,OnInit } from '@angular/core';
import { Post } from './../../Models/Post';
import { Story } from './../../Models/Story';

@Component({
  selector: 'app-time-line-component',
  templateUrl: './time-line-component.component.html',
  styleUrls: ['./time-line-component.component.scss']
})
export class TimeLineComponentComponent implements OnInit {

  comment: string = ''                                                 

  constructor() { }

  stories : Story[] = [
    new Story('kimetsunoyaiba','assets/img/teng.gif'),
    new Story('henn_mohamed_off','assets/img/henni.jpg'),
    new Story('sadiomaneofficiel','assets/img/sadio.jpg'),
    new Story('dante','assets/img/dante.jpg'),
    new Story('Leo Messi','assets/img/messi.jpg'),
    new Story('RealdonaldJTrump','assets/img/trump.jpg'),
    new Story('IPD','assets/img/ipd.png'),
    new Story('Macky Sall','assets/img/macky.jpg'),
    new Story('Bayern Munich','assets/img/by'),
    new Story('Lamborghini','assets/img/lamb.png')
   
  ]
  posts : Post[] = [
    new Post(
      'Messi et sa Famille',
      'Leo Messi',
    'assets/img/messi.jpg',
    'assets/img/messi.jpg',
    false,
    false,
    false,
    20,
    'Yes',
    new Date,
    'Argentine'),
    
   new Post(
    'Mohamed Henni en Equipe de France', 
    'henni_mohamed_off',
   'assets/img/henni.jpg',
   'assets/img/henni.jpg',
   false,
    false,
    false,
    30,
    'Ce soir c\'est Match !!!!',
    new Date,
    'France'),

    new Post(
      'Le dieu du quartier des plaisirs',
      'kimetsunoyaiba',
   'assets/img/teng.gif',
   'assets/img/teng.gif',
   false,
    false,
    false,
    750,
    'L\'un des meilleurs Anime au Monde',
    new Date,
    'Tokyo'),
    
    new Post(
      'Le Roi de Spade',
      'dantedespade',
   'assets/img/dante.jpg',
   'assets/img/dante.jpg',
   false,
    false,
    false,
    256,
    'Hote de Lucifer ',
    new Date,
    'Spade'),

    new Post(
      'L\'enfant de Bambaly',
      'Sadiomaneofficiel',
   'assets/img/sadio.jpg',
   'assets/img/sadio.jpg',
   false,
    false,
    false,
    902,
    'Ballon d\'Or 2022 Incha\'Allah !!!',
    new Date,
    'Angletterre'),

    new Post(
      'Le Meilleur des meilleurs',
      'RealdonaldJTrump',
   'assets/img/trump.jpg',
   'assets/img/trump.jpg',
   false,
    false,
    false,
    902,
    '45 eme President des Etats-Unies D\'Amerique',
    new Date,
    'Washington'),

    new Post(
      'Le Meilleur des Ecoles du Sénégal',
      'IPD',
   'assets/img/ipd.png',
   'assets/img/ipd.png',
   false,
    false,
    false,
    982,
    'Depuis 1991',
    new Date,
    'Senegal'),
    new Post(
      'President du Senegal',
      'Macky Sall',
   'assets/img/macky.jpg',
   'assets/img/macky.jpg',
   false,
    false,
    false,
    782,
    'Son Exellence ',
    new Date,
    'Senegal-Palais de la Republique'),

    new Post(
      'La Voiture la plus Rapide du monde',
      'Bugatti',
   'assets/img/buga.jpg',
   'assets/img/buga.jpg',
   false,
    false,
    false,
    522,
    'THE one',
    new Date,
    'Allemagne'),

    new Post(
      'La Meilleur Equipe du Monde',
      'Bayern Munich',
   'assets/img/by.jpg',
   'assets/img/by.jpg',
   false,
    false,
    false,
    568,
    'Mia san Mia',
    new Date,
    'Munich'),
    

   

  ]
  
  
  ngOnInit(): void {
  }

}


