import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    `<h1>Hello {{title}}</h1>
    <h2>{{hero.name}} details!</h2> 
    <div><label>id :</label>{{hero.id}}</div> 
    <div>
      <label>name :</label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>`
})
export class AppComponent  { 
  name = 'Angular'; 
  title = 'Tour of Heroes';
  hero : Hero = {
	id : 1,
	name : 'Uday'
  }
}

export class Hero {
	id : number;
	name : string;
}
