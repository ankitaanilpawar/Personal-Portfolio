import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  lang = [{'name':'HTML'},
          {'name':'CSS'},
          {'name':'BootStrap'},
          {'name':'WordPress'},
          {'name':'Python'},
          {'name':'Angular'},
          {'name':'Java'},
          {'name':'JSP'},
         ];

  constructor() { }
  ngOnInit(): void {
  }
}