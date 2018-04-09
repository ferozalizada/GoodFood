import { Component, OnInit } from '@angular/core';
import { DatapointService} from '../../services/datapoint.service';
import { Router } from '@angular/router';
import { PostDataService } from '../../services/post-data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(
    private datapointService: DatapointService,
    private router: Router,
    private postData: PostDataService
  ) { }
  restaurant: any;
  details: any;
  frequentRater:any;


  ngOnInit() {
    this.getRestaurantDetails();
  }
  getRestaurantDetails(){
    this.restaurant = this.datapointService.getSelectedRestaurant();
    this.datapointService.onSelectRestaurant(this.restaurant).subscribe(data =>{
      this.details = data
      // console.log(this.details,'The deails are here');
    })
  }
  showMenu(restaurant: any){
    // console.warn('THis is their asdlknasdljn',restaurant );
    this.datapointService.setRestaurant(restaurant);
    this.datapointService.setQueryResult(this.datapointService.searchDataBySelection('getMenuOfRestaurant', restaurant.name));
    this.router.navigate(['/menu']);
  }
  showFrequentRater(restaurant: any){
    // this.getRestaurantDetails();
    console.warn(restaurant);
    this.datapointService.searchDataBySelection('getFrequentRater', restaurant)
    .subscribe((data)=>{
      this.frequentRater = data;
      console.warn(data,"this is my frequent raters")
    })

  }
  
  
}
