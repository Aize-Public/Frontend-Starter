import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rock-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: Event): void {
    this.inputChange.emit(event);
  }
}
