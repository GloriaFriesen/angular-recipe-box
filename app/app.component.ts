import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>{{month}}/{{day}}/{{year}}</h3>
    <h3>What time is it? Burger time. AKA: {{time}}</h3>
    <h3>{{currentFocus}}</h3>
    <img src="resources/images/bobs.jpeg">
    <h2>Burgers</h2>
    <ul>
      <li *ngFor="let recipe of recipes">{{recipe.title}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Come meet our family, let us meat you. Meet meat!';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  hour: number = this.currentTime.getHours();
  minute: number = this.currentTime.getMinutes();
  time: string = this.hour + ':' + this.minute;
  recipes: Recipe[] = [
    new Recipe('Smells Like Bean Spirit'),
    new Recipe('Poutine on the Ritz Burger'),
    new Recipe('Cheeses is Born Burger'),
    new Recipe('Don\'t you Four Chedda\' \'Bout Me Burger')
  ];
}

export class Recipe {
  constructor(public title: string) {}
}
