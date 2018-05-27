import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
public skillsList=[
  {"skill":"UI/UX DESIGN", "exp":"5"},
  {"skill":"Angular2/4/5", "exp":"5"},
  {"skill":"JAVASCRIPT", "exp":"5"},
  {"skill":"TYPESCRIPT", "exp":"5"},
  {"skill":"html5", "exp":"5"},
  {"skill":"css3", "exp":"5"},
  {"skill":"webpack", "exp":"5"},
  {"skill":"ionic3", "exp":"5"},
  {"skill":"cordova4", "exp":"5"},
  {"skill":"nodejs", "exp":"3"}
 ]
  constructor() { }

  ngOnInit() {
  }

}
