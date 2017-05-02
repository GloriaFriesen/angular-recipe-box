import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>{{month}}/{{day}}/{{year}}</h3>
    <h3>What time is it? Burger time. AKA: {{time}}</h3>
    <h3>{{currentFocus}}</h3>
    <img (click)="showBurger()" src="resources/images/bobs.jpeg">
    <div *ngIf="burgerShow">
      <img src="resources/images/burger.gif" alt="loading">
    </div>
    <h2>Burgers</h2>
    <ul>
      <li [class]="ratingColor(recipe)" (click)="isGood(recipe)" *ngFor="let recipe of recipes">{{recipe.title}} <button (click)="editRecipe(recipe)">Edit!</button></li>
    </ul>
    <hr>
    <div>
      <div *ngIf="selectedRecipe">
      <h3>{{selectedRecipe.title}}</h3>
      <p>Is this recipe good? {{selectedRecipe.good}}</p>
      <h3>Edit Recipe</h3>
      <label>Enter Recipe Title:</label>
      <input [(ngModel)]="selectedRecipe.title">

      <label>Enter Recipe Rating (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="1">1 (yuck)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="2">2 (I guess it's ok)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="3">3 (yum)
      <button (click)="finishedEditing()">Done</button>
    </div>
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
    new Recipe('Smells Like Bean Spirit', ['beans', 'pepper jack'], ['1. Re-fry them beans', '2. Add pepper jack cheese'], 3),
    new Recipe('Poutine on the Ritz Burger', ['poutine', 'gravy', 'cheese curds'], ['1. Cook up some poutine', '2. Throw in some gravy', '3. Simmer...'], 2),
    new Recipe('Cheeses is Born Burger', ['mozzarella'], ['1. Stick the cheese in the burger', '2. Cook burger'], 1 ),
    new Recipe('Don\'t you Four Chedda\' \'Bout Me Burger', ['cheddar', 'white cheddar', 'smoked cheddar', 'extra sharp cheddar'], ['1. Create a 4 cheese blend of your 4 cheeses', '2. Place the mixture on top of your burger'], 3)
  ];
  selectedRecipe = null;
  burgerShow = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
  isGood(recipe) {
    if(recipe.good === true) {
      console.log("cool");
    } else {
      console.log("not cool");
    }
  }
  ratingColor(recipe) {
    if (recipe.rating === 3) {
      return "red";
    } else if (recipe.rating === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
  finishedEditing() {
    this.selectedRecipe = null;
  }
  showBurger() {
    if (this.burgerShow) {
      this.burgerShow = null;
    } else {
      this.burgerShow = true;
    }
  }

}

export class Recipe {
  public good: boolean = true;
  constructor(public title: string, public ingredients: string[], public directions: string[], public rating: number) {}
}
