import { Component } from '@angular/core';
import { skills } from '../../../assets/data/skills';

export interface SkillsInterface {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills!: SkillsInterface[];
  ngOnInit(): void {
    this.skills = skills;
  }
}
