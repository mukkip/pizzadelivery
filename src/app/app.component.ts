import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'pizza-delivery';
  totals = 0;
  totall = 0;
  totalm = 0;
  totalel = 0;
  checked=false;
  displayedColumns: string[] = ['topping', 'select', 'select2', 'select3', 'select4'];
  dataSource = new MatTableDataSource<Pizza>(ELEMENT_DATA);
  selection = new SelectionModel<Pizza>(true, []);
selection2= new SelectionModel<Pizza>(true,[]);
selection3= new SelectionModel<Pizza>(true,[]);
selection4= new SelectionModel<Pizza>(true,[]);
ngOnInit(){
    
  }

  onChanged(event, row) {
    this.selection.toggle(row);
    this.checked=true;
    if (event.checked === true) {
      if (this.totals === 0)
        this.totals = 5 + row.prize;
      else
        this.totals += row.prize;
    }
    else {
      if(this.selection.selected.length ===0){
      this.totals=0;
  this.checked=false;
    }
    else
      this.totals -= row.prize;
    }
  }

  onChanged2(event, row) {
    this.selection2.toggle(row);

    if (event.checked === true) {
      if (this.totalm === 0)
        this.totalm = 7 + row.prize;
      else
        this.totalm += row.prize;
    }
    else {
      if(this.selection2.selected.length ===0)
      this.totalm=0
    else
      this.totalm -= row.prize;
    }
  }


onChanged3(event, row) {
  this.selection3.toggle(row);

  if (event.checked === true) {
    if (this.totall === 0)
      this.totall = 8 + row.prize;
    else
      this.totall += row.prize;
  }
  else {
    if(this.selection3.selected.length ===0)
    this.totall=0
    else
    this.totall -= row.prize;
  }
}



onChanged4(event, row) {
  this.selection4.toggle(row);

  if (event.checked === true) {
    if (this.totalel === 0)
      this.totalel = 9 + row.prize;
    else
      this.totalel += row.prize;
  }
  else {
    if(this.selection4.selected.length ===0)
      this.totalel=0
    else
    this.totalel -= row.prize;
  }
}

}
export interface Pizza {

  topping: string;
  prize: number;
}

const ELEMENT_DATA: Pizza[] = [

  { topping: 'Tomatoes ( $1.00)', prize: 1 },
  { topping: 'Onions ($0.50)', prize: 0.5 },
  { topping: 'Bell pepper ($1.00)', prize: 1 },
  { topping: 'Mushrooms ($1.20)', prize: 1.2 },
  { topping: 'Pineapple ($0.75)', prize: 0.75 },
  { topping: 'Sausage ($1.00)', prize: 1 },
  { topping: 'Pepperoni ($2.00)', prize: 2 },
  { topping: 'Barbecue chicken ($3.00)', prize: 3 },

];
