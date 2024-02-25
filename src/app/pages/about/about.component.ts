import { Component, OnInit } from '@angular/core';

declare var VANTA:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    VANTA.GLOBE({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      showLines: false,
      backgroundColor: 0    
    })
  }

  


}
