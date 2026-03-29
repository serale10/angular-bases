import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string[] = ['Spiderman', 'Batman', 'Wolverine', 'Magneto', 'Leviatán'];
    public lastNameHero?: string;

    mtEliminatedHero(){

        this.lastNameHero = this.heroNames.pop();

    }
}
