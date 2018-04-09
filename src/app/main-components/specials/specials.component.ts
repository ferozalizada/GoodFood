import { Component, OnInit } from '@angular/core';
import { DatapointService } from '../../services/datapoint.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  constructor(
    private datapointServer: DatapointService
  ) { }
  specialsMenu: any;
  ngOnInit() {
    this.getSpecials();
  }
  getSpecials(){
    this.datapointServer.searchDataBySelection('getSpecialsDetail', '')
    .subscribe(data=>{
      this.specialsMenu = data;
      console.log(data, "Specials")
    })

  }


}
