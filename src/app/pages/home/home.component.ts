import { Component, AfterViewInit } from '@angular/core';

declare var VANTA:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{
  public linkedin: string = 'https://www.linkedin.com/in/thomas-edson-dev/'
  public github: string = 'https://github.com/developer-thomas'
  public instagram: string = 'https://www.instagram.com/thomas.devp/'


  constructor() { }
  
   // you can also use OnInit hooks
   ngAfterViewInit(): void {
  //   VANTA.NET({
  //     el: "#vanta",
  //     color: 0xca6c56,
  //     backgroundColor: 0x342071,
  //     points: 10.00,
  //     maxDistance: 15.00,
  //     spacing: 20.00
  // })

      VANTA.DOTS({
        el: '#vanta',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        showLines: false,
        backgroundColor: 0o3
      })
      
    }
} 

