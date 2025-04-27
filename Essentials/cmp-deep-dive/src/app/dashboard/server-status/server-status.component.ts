import { Component } from '@angular/core';
import { DashboardItemComponent } from "../../shared/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'online';
  title = 'Server Status';
  image = {src:'status.png',alt: 'A signal symbol'}
}
