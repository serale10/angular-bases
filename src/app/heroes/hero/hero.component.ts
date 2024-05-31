import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    console.log('Funciona el click');
      this.name = 'Batman';
  }

  changeAge(){
      this.age = 32;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde angular</h1>';
    });
  }
}
