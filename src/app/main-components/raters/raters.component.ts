import { Component, OnInit } from '@angular/core';
import { PostDataService } from'../../services/post-data.service';
import { Apicalls } from '../../classes/apicalls';
import { DatapointService } from '../../services/datapoint.service';

@Component({
  selector: 'app-raters',
  templateUrl: './raters.component.html',
  styleUrls: ['./raters.component.css']
})
export class RatersComponent implements OnInit {

  constructor(
    private postData: PostDataService,
    private datapoinservice: DatapointService
  ) { }

  name: string;
  diverseratingAPICall = new Apicalls('getDiverseRating', '');
  getcomparison = new Apicalls('getRatingComparison', this.name);
  diverseRaters: any;
  frequentRater: any;
  
  ngOnInit() {
    
    this.getDiverseRatings(this.diverseratingAPICall);
    this.getRatingComparison(this.getcomparison)
  }

  getDiverseRatings(method: Apicalls){
    this.postData.fetchAPIData(method).subscribe(
      data => {
        this.diverseRaters = data;
        console.log(method,"this is the method: ",data, 'diverse Rating');
      }
    )
  }

  getRatingComparison(method: Apicalls){
    this.postData.fetchAPIData(method)
    .subscribe(data => {
      this.diverseRaters = data;
      console.log(data, 'comparison Rating');
    })
  }

  showHighestRater(restaurant: any){
    // this.getRestaurantDetails();
    // console.warn(restaurant);
    this.datapoinservice.searchDataBySelection('getHighestRaterP2', restaurant)
    .subscribe((data)=>{
      this.frequentRater = data;
      // console.warn(data,"this is my Part !")
    })
  }
  showHighestRaterP2(restaurant: any){
    // this.getRestaurantDetails();
    // console.warn(restaurant);
    this.datapoinservice.searchDataBySelection('getHighestRater', restaurant)
    .subscribe((data)=>{
      this.frequentRater = data;
      // console.warn(data,"this is my PART 2")
    })
  }
  getRestaurantRatingNotCondition(restaurant: any){
    // this.getRestaurantDetails();
    // console.warn(restaurant);
    this.datapoinservice.searchDataBySelection('getRestaurantRatingNotCondition', restaurant)
    .subscribe((data)=>{
      this.frequentRater = data;
      // console.warn(data,"this is my PART 2")
    })
  }
}
