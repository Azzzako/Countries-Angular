import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Output()
  public onValue = new EventEmitter<string>();

  emitSearch(value: string): void {
    this.onValue.emit(value)
  }

  @Input()
  public placeholder: string = ''

}
