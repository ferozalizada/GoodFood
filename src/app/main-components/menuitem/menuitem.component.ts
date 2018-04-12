import { Component, OnInit } from '@angular/core';
import { DatapointService } from '../../services/datapoint.service';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  constructor(private datapointService: DatapointService) { }
foodx: any;
foodmenu: any;
  ngOnInit() {
    this.getHighestRatedFood('dinner');
  }

  getHighestRatedFood(food: any){

    this.datapointService.searchDataBySelection('getHighRatedFoodbyRestaurantType', this.datapointService.getFoodType().type)
    .subscribe((data)=>{
      this.foodmenu = data;
      console.warn(data, "the food menu")
    })
  }
}
