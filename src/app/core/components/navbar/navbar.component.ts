import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleSidebar() {
    // Logic to toggle sidebar
    // You might use an EventEmitter to notify the parent component
  }
}
