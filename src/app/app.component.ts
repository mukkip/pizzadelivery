import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';
import { Component } from '@angular/core'
import { DataRowOutlet } from '@angular/cdk/table';

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
  totalom = 0;
  totalol = 0;
  toppingsl = 0;
  toppings = 0;
  offer = false;
  offerl = false;
  checkp = false;
  checkb = false;
  small=3;
  high = 0;
  displayedColumns: string[] = ['topping', 'select', 'select2', 'select3', 'select4'];
  dataSource = new MatTableDataSource<Pizza>(ELEMENT_DATA);
  selection = new SelectionModel<Pizza>(true, []);
  selection2 = new SelectionModel<Pizza>(true, []);
  selection3 = new SelectionModel<Pizza>(true, []);
  selection4 = new SelectionModel<Pizza>(true, []);
  ngOnInit() {

  }

  onChanged(event, row) {
    this.selection.toggle(row);

    if (event.checked === true) {
      if (this.totals === 0)
        this.totals = 5 + row.prize;
      else
        this.totals += row.prize;
    }
    else {
      if (this.selection.selected.length === 0) {
        this.totals = 0;

      }
      else
        this.totals -= row.prize;
    }
  }

  onChanged2(event, row) {
    this.selection2.toggle(row);

    if (event.checked === true) {
      if (this.totalm === 0) {
        this.totalm = 7 + row.prize;
        this.totalom = 7 + row.prize;
      }
      else {
        this.totalm += row.prize;
        this.totalom += row.prize;
      }
      if (row.topping === 'Pepperoni ($2.00)') {
        this.toppings += 2;
        this.checkp = true;
      }
      else if (row.topping === 'Barbecue chicken ($3.00)') {
        this.toppings += 2;
        this.checkb = true;
      }
      else
        this.toppings += 1;

      if (this.toppings === 2) {
        this.totalom = 5;
        this.offer = true;
      }
      else if (this.toppings > 2) {
    
        this.selection2.selected.map(x => {
          if (x.prize > this.high)
            this.high = x.prize;
        })

        this.totalom= 5+ (this.totalm -7 -this.high)
        this.offer = true;
        this.high=0;
      }

    }
    else {
      if (this.selection2.selected.length === 0) {
        this.totalm = 0;
        this.totalom = 0;
        this.offer = false;
        this.toppings = 0;
      }
      else {
        this.totalm -= row.prize;

        if (row.topping === 'Pepperoni ($2.00)') {
          this.toppings -= 2;
          this.checkp = false;
        }
        else if (row.topping === 'Barbecue chicken ($3.00)') {
          this.toppings -= 2;
          this.checkb = false;
        }
        else
          this.toppings -= 1;

      }
      if (this.toppings < 2) {
        this.offer = false;
        this.totalom = this.totalm;
      }
      else if (this.toppings >= 2) {
            
        this.selection2.selected.map(x => {
          if (x.prize > this.high)
            this.high = x.prize;
        })

        this.totalom= 5+ (this.totalm -7 -this.high)
        this.offer = true;
        this.high = 0;
      }
      }
    }


    onChanged3(event, row) {
      this.selection3.toggle(row);

      if (event.checked === true) {
        if (this.totall === 0) {
          this.totall = 8 + row.prize;
          this.totalol = 8 + row.prize;
        }
        else {
          this.totall += row.prize;
          this.totalol += row.prize;
        }

        if (row.topping === 'Pepperoni ($2.00)' || row.topping === 'Barbecue chicken ($3.00)')
          this.toppingsl += 2;
        else
          this.toppingsl += 1;

        if (this.toppingsl === 4) {
          this.totalol = this.totall * 0.5;
          this.offerl = true;
        }
        else if(this.toppingsl>4){
          this.selection3.selected.map(x => {
            if (x.prize < this.small)
              this.small = x.prize;
          })
            console.log(this.small)
          this.totalol = (this.totall-this.small) * 0.5 + this.small;
          this.offerl=true;
          this.small=3;
        }
      }
      else {
        if (this.selection3.selected.length === 0) {
          this.totalol = 0;
          this.totall = 0;
          this.offerl = false;
          this.toppingsl = 0;
        }
        else {
          this.totall -= row.prize;
         
          if (row.topping === 'Pepperoni ($2.00)' || row.topping === 'Barbecue chicken ($3.00)')
            this.toppingsl -= 2;
          else
            this.toppingsl -= 1;

        }
        if (this.toppingsl < 4) {
          this.offerl = false;
          this.totalol = this.totall;
        }
        else
        {
          this.totalol -= row.prize;
        }
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
        if (this.selection4.selected.length === 0)
          this.totalel = 0
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
  { topping:'Veg Toppings',prize:0},
  { topping: 'Tomatoes ( $1.00)', prize: 1 },
  { topping: 'Onions ($0.50)', prize: 0.5 },
  { topping: 'Bell pepper ($1.00)', prize: 1 },
  { topping: 'Mushrooms ($1.20)', prize: 1.2 },
  { topping: 'Pineapple ($0.75)', prize: 0.75 },
  { topping:'Non-Veg Toppings',prize:0},
  { topping: 'Sausage ($1.00)', prize: 1 },
  { topping: 'Pepperoni ($2.00)', prize: 2 },
  { topping: 'Barbecue chicken ($3.00)', prize: 3 },

];
