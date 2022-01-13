import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodycon',
  templateUrl: './bodycon.component.html',
  styleUrls: ['./bodycon.component.css']
})

export class BodyconComponent implements OnInit {
  name = "ANKITA ANIL PAWAR";
  age = "21 YEARS";
  edu="MASTER OF COMPUTER APPLICATIONS";
  bd="15 Jan 2000";
  web ="www.example.com";
  phno ="+91 89888 45111";
  city ="Pune , Maharashtra";
  gmail ="pawarankitaanil@gmail.com";
  constructor() { }
  ngOnInit(): void {
  }
} 