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
      <li *ngFor="let recipe of recipes">{{recipe.title}} <button (click)="editRecipe()">Edit!</button></li>
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
    new Recipe('Smells Like Bean Spirit', ['beans', 'pepper jack'], ['1. Re-fry them beans', '2. Add pepper jack cheese']),
    new Recipe('Poutine on the Ritz Burger', ['poutine', 'gravy', 'cheese curds'], ['1. Cook up some poutine', '2. Throw in some gravy', '3. Simmer...']),
    new Recipe('Cheeses is Born Burger', ['mozzarella'], ['1. Stick the cheese in the burger', '2. Cook burger'] ),
    new Recipe('Don\'t you Four Chedda\' \'Bout Me Burger', ['cheddar', 'white cheddar', 'smoked cheddar', 'extra sharp cheddar'], ['1. Create a 4 cheese blend of your 4 cheeses', '2. Place the mixture on top of your burger'])
  ];

  editRecipe() {
    alert("You just requested to edit a recipe!");
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) {}
}
