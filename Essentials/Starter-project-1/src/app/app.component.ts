import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName?: string;
  selectedUserId?:string;

  onUserSelect(event:string){
    const user = this.users.find((u)=>u.id === event);
    this.selectedUserName = user?.name;
    this.selectedUserId = user?.id
  }
}
