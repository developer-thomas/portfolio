import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public linkedin: string = 'https://www.linkedin.com/in/thomas-edson-dev/'
  public github: string = 'https://github.com/developer-thomas'
  public instagram: string = 'https://www.instagram.com/thomas.devp/'

}
