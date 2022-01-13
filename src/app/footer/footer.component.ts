import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[MydataService]
})
export class FooterComponent implements OnInit {

  menuItems:string[]= this.milist.getMenuItem();

  constructor(private milist:MydataService) { }

  ngOnInit(): void {
  }

}
