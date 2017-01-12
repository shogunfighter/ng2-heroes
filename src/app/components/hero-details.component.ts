import { Component, Input } from "@angular/core";
import { Hero } from '../class/hero';

@Component({
    selector: "hero-details",
    template: `
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}