import { Component, Input,OnChanges,SimpleChanges , ViewChild , ElementRef, OnInit , } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})


export class SidenavComponent  {
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
