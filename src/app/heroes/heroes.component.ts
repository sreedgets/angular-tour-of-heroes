import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

  heroes = HEROES;

  //ngOnInit is a lifecycle hook called shortly after creating a component. Good place to put init logic.
  ngOnInit(): void {
  }

}
