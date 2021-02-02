import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;

  onAmountChange(event: Event) { 
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    this.amount = parsedValue;
  }

  onDateChange(event: Event) { 
    const target = event.target as HTMLInputElement;
    const parsedValue = target.value;

    this.date = parsedValue;
  }

  onNameChange(event: Event) { 
    const target = event.target as HTMLInputElement;
    const parsedValue = target.value;

    this.name = parsedValue;
  }
}
