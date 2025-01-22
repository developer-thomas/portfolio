import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PrimeNG } from 'primeng/config';
import { ExperienceComponent } from './pages/experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
