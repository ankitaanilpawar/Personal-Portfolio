import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  qualification = [
    {"name":"Master","University":"Pune University","Year":"2022"},
    {"name":"Graduation","University":"Pune University","Year":"2021"},
    {"name":"10th","University":"HSC","Year":"2017"},
    {"name":"12th","University":"SSC","Year":"2015"}
  ];
  projects = [
    {"name":"Natural Disaster Information System","Frontend":"HTML,CSS,Bootstrap,Django","Backend":"PostgreSQL"},
    {"name":"E-voting System","Frontend":"JSP, HTML ,CSS","Backend":"ORACLE"},
    {"name":"Online Photoshoot Registration System","Frontend":"JSP, HTML ,CSS","Backend":"ORACLE"},
    {"name":"Wholesale Vegetable  Supplier Management System","Frontend":"VB6","Backend":"Microsoft Access"}
  ];
  tableheading = "EDUCATIONAL QUALIFICATIONS :";
  tableheading1 = "KEY-ACADEMIC PROJECTS";
  
  constructor() { }

  ngOnInit(): void {
  }
}
