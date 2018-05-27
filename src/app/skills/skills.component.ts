import { Component, OnInit } from '@angular/core';
import { NgProgressService } from "ng2-progressbar";
//import { Http} from '@angular/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillsList = [
    { "skill": "UI/UX DESIGN", "exp": "10" },
    { "skill": "Angular2/4/5", "exp": "8" },
    { "skill": "JAVASCRIPT", "exp": "9" },
    { "skill": "TYPESCRIPT", "exp": "8" },
    { "skill": "html5", "exp": "9" },
    { "skill": "css3", "exp": "9" },
    { "skill": "webpack", "exp": "7" },
    { "skill": "ionic3", "exp": "7" },
    { "skill": "cordova4", "exp": "7" },
    { "skill": "nodejs", "exp": "7" }
  ]
  constructor(private pService: NgProgressService) { }

  ngOnInit() {
    /** request started */
    this.pService.start();

  }

}
