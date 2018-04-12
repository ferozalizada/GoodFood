import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Apicalls } from '../../classes/apicalls';
import { PostDataService } from '../../services/post-data.service';
import { Restaurant } from '../../classes/restaurant';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import { DatapointService } from '../../services/datapoint.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  topRatedFood:any;
  restaurants : any = [];
  searchQueryResult : any = [];
  topRated = new Apicalls('getTypePopularity', 'Asian');
  
  searchWhat: any;

  searchInput: any;
  flag = false;
  flag2 = false;
  selectedFood:any;
  selectedRestaurant:any;
  menuItems: any = [];


  constructor(
    private datapointService: DatapointService,
    private router: Router,
    private fetchData: FetchDataService,
    private postData: PostDataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRestaurants();
    this.getTopRatedRestaurantData();
  }

  getRestaurants(){
    this.fetchData.fetchRestaurant().subscribe( data => {
      this.restaurants = data;
    })
  }

  getTopRatedRestaurantData(){
    this.postData.getTopRatedByType()
      .subscribe( data => {
        this.topRatedFood = data;
    })
  }

  alertMe(food: any){
    console.warn("type clicked", food);
    this.datapointService.setFoodType(food);
  }

  searchDatabase(){
    if(this.searchWhat === 'getTypeDetails'){
      this.postData.getTypeDetails(this.searchInput)
        .subscribe( data=>{
          this.restaurants = data;
        })
    }else{
      this.postData.searchString(this.searchInput)
        .subscribe( (data => {
          this.restaurants = data;
      }))
    }
  }
  onSelect(food: any){
    this.selectedFood = food;
    console.log(food)
  }
  onSelectRestaurant(restaurant: any){
    this.selectedRestaurant = restaurant;
    this.datapointService.setRestaurant(restaurant);
    this.router.navigate(['restaurant', restaurant.restaurantid]);
  }

  select(restaurant: any){
    this.selectedRestaurant = restaurant;
    this.datapointService.setRestaurant(restaurant);
  }
  showAllTopRated(){
    if(this.flag){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }
  showAllRestaurant(){
    if(this.flag2){
      this.flag2 = false;
    }else{
      this.flag2 = true;
    }
  }

  deleteRestaurant(restaurant: any){
    let x = restaurant;
    this.postData.deleteRestaurant(restaurant)
      .subscribe(function(data){
        if(data == null){
          alert( "the restaurant is deleted"); 
        }
      })
      

  }
}
