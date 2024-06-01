import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";


@Component({
  selector: 'app-dbz-list',
  templateUrl: './principal-list.component.html',
  styleUrl: './principal-list.component.css',
})
export class PrincipalListComponent {

  constructor(){

  }
  // @Output()
  // public onDeleteCharac: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];


  // onDeleteId(value: number):void{
  //     this.onDeleteCharac.emit(value);
  // }

  onDeleteById(id?: string):void{
      if( !id ) return;
      this.onDelete.emit(id);
  }

  onDeleteCharacter(index: number):void{
    // Emitir el id del personaje
    console.log(index);
  }


}
