import { Component } from '@angular/core';

@Component({
  selector: 'jms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jWebshop';
  value = 'jWebshop edit input';
  saveValue(value) {
    this.value = value;
  }
}
