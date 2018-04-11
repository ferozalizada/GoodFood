import { Component, OnInit } from '@angular/core';
import { DatapointService} from '../../services/datapoint.service';
import { Router } from '@angular/router';
import { PostDataService } from '../../services/post-data.service';
import { NgForm } from '@angular/forms';
import { PHPResponse } from '../../types';

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
  // food: any;
  // mood: any;
  // comment: any;
  // staff: any;
  // price: any;
  // restaurantid:any;
  // comments: any;
  // userid: any;
  rate = {
    userId: '',
    restaurantId: '',
    food:'',
    mood:'',
    price:'',
    staff:'',
    comment:'',
    method: 'rateRestaurant'


  }

  ngOnInit() {
    this.restaurant = this.datapointService.getSelectedRestaurant();
    this.getRestaurantDetails(this.restaurant.restaurantid);
  }

  getRestaurantDetails(id: any){
    this.postData.getRestaurantDetails(id)
      .subscribe( data => {
        this.details = data;
    })
  }
  showMenu(restaurant: any){
    this.postData.getMenuOfRestaurant(restaurant.restaurantid);
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
  rateRestaurant(form: object){
    this.rate.restaurantId = this.restaurant.restaurantid;
    this.datapointService.currentData.subscribe(data =>{
      this.rate.userId = data;
    })
    this.postData.rateRestaurant(form)
      .subscribe( (res: PHPResponse) => {
        if(res.status == 'success'){
          alert('Inserted')
        } else{
          alert('You need to Login')
        }

      })

  }
  
  
}
