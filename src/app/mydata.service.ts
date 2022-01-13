import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  menuitems:string[]=['Home','About','Contact','Education'];
  getMenuItem()
  {
    return this.menuitems;
  }
  constructor() { }
}
