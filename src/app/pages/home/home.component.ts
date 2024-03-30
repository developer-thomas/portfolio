import { Component, AfterViewInit } from '@angular/core';

declare var VANTA: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.responsive.scss'],
})
export class HomeComponent implements AfterViewInit {
  public linkedin: string = 'https://www.linkedin.com/in/thomas-edson-dev/';
  public github: string = 'https://github.com/developer-thomas';
  public instagram: string = 'https://www.instagram.com/thomas.devp/';

  constructor() {}

  // you can also use OnInit hooks
  ngAfterViewInit(): void {
    VANTA.GLOBE({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      showLines: false,
      backgroundColor: 0,
    });
  }
}
