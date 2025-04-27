import { Component } from '@angular/core';
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { HeaderComponent } from "./header/header.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./shared/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ServerStatusComponent, HeaderComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {
  
  
}
