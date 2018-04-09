import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Apicalls } from '../../classes/apicalls';
import { PostDataService } from '../../services/post-data.service';
import { Restaurant } from '../../classes/restaurant';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // restaurants: = [];
  topRatedFood:any;
  x:Apicalls;
  restaurants : Restaurant[] = [];
  searchQueryResult : any = [];
  // method = new Apicalls('getRestaurantsById', '1');
  topRated = new Apicalls('getTypePopularity', 'Asian');
  searchMethodbyID = new Apicalls('getRestaurantLocationByName', '');
  

  searchInput: string;

  selectedFood:any;
  selectedRestaurant:any;
  constructor(
    private fetchData: FetchDataService,
    private postData: PostDataService
  ) { }
  // createMethod(method, parameter){
  //   this.method.method = 'getRestaurantsById', this.method.parameter = '1'
  // }
  ngOnInit() {
    this.getRestaurants();
    // console.warn(this.topRated);
    this.getData(this.topRated);
    // this.getData(this.apicall2);
  }
  getRestaurants(){
    this.fetchData.fetchRestaurant().subscribe( data => {
      this.restaurants = data;
      // console.log(this.restaurants, "Data eh?")
      }
    )
  }
  getData(method: Apicalls){
    this.postData.fetchAPIData(method).subscribe( data => {
      this.topRatedFood = data;
      console.log(data, 'Top Rated food');
      // this.restaurants = data;
    })
  }
  alertMe(){
    alert("I am clicked");
    console.warn("I am clicked bitch");
    // this.selected = 
  }
  searchDatabase(){
    console.warn(this.searchInput)
    
    this.searchMethodbyID.setMethod("getRestaurantLocationByID");
    this.searchMethodbyID.setParameter(this.searchInput);
    
    this.postData.fetchAPIData(this.searchMethodbyID).subscribe( data => {
      console.warn("running search Database!", data);
      this.searchQueryResult = data;
      console.log(this.searchQueryResult);
    })
  }
  onSelect(food: any){
    this.selectedFood = food;
    console.log(food)

  }
 
  onSelectRestaurant(restaurant: any){
    this.selectedRestaurant = restaurant;
    console.log(restaurant);
    

  }
 

}
