import { Component, ElementRef, EventEmitter, Input, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  @ViewChild('mySelect') mySelect: ElementRef<HTMLSelectElement> | undefined;
  @Output() activeOptionIdChange = new EventEmitter<string>();
  @Input() activeOptionId: string | undefined;
  


sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: 'Price (High-Low)',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'Price (Low-High)',
    },
  ]

  

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['activeOptionId'] as SimpleChange)?.currentValue === '') {
      this.activeOptionId = this.sortbyOptions[0].optionId;
    }
  }


  updateActiveOptionId(opId:any){
    this.activeOptionId = opId;
    this.activeOptionIdChange.emit(this.activeOptionId);
  }
   
  

}
