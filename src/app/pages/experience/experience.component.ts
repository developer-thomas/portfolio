import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}
@Component({
  selector: 'app-experience',
  imports: [Timeline, CardModule, ButtonModule, NgIf],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', './experience.responsive.scss'],
})
export class ExperienceComponent {
  events: EventItem[];
  constructor() {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
    ];
  }
}
