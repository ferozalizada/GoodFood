import { Component, OnInit } from '@angular/core';
import { DatapointService } from '../../services/datapoint.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private datapointService: DatapointService) { }

  ngOnInit() {
    this.showMenu();
  }
  menu: any;
  restaurant: any;


  showMenu(){
    this.restaurant = this.datapointService.getSelectedRestaurant();
    console.log(this.restaurant.name, "John Cena")
    this.datapointService.searchDataBySelection('getMenuOfRestaurant', this.restaurant.name)
    .subscribe((data)=>{
      this.menu = data;
      // console.log(data,"My data")
    })
  }

}
