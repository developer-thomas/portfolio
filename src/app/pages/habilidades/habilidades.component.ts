import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SkillsInterface } from '../../../model/skills.interface';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public path: string = '../../../assets/skills/';
  public skills!: SkillsInterface[];

  ngOnInit(): void {
    this.http
      .get<SkillsInterface[]>('../../../assets/data/skills.json')
      .subscribe((res) => {
        this.skills = res;
      });
  }
}
