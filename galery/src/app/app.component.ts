import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson37Ng';
  showNotification:boolean = true;


  onShowNotificationsBtnClick(){
    this.showNotification = !this.showNotification;
  }
}
