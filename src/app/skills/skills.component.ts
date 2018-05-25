import { Component, OnInit } from '@angular/core';
import {NgProgressService} from "ng2-progressbar";
//import { Http} from '@angular/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private pService: NgProgressService) { }

  ngOnInit() {
    /** request started */
    this.pService.start();
    
  }

}
