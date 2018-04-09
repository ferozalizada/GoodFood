import { Injectable } from '@angular/core';
import { Apicalls } from '../classes/apicalls';
import { PostDataService } from './post-data.service';

@Injectable()
export class DatapointService {
  searchMethodbyID = new Apicalls('','');
  constructor(
    private postData: PostDataService
  ) { }

  mySelectedRestaurant: any;
  queryResultByID: any;
  foodType: any;

  setRestaurant(res: any){
    this.mySelectedRestaurant = res;
  }
  getSelectedRestaurant(){
    return this.mySelectedRestaurant;
  }
  setQueryResult(query: any){
    this.setQueryResult = query;
  }
  getQueryResult(){
    return this.queryResultByID;
  }

  searchDataBySelection(method, parameter){
    this.searchMethodbyID.setMethod(method);
    this.searchMethodbyID.setParameter(parameter);
    return this.postData.fetchAPIData(this.searchMethodbyID);
  }
  onSelectRestaurant(restaurant: any){
    return this.searchDataBySelection('getRestaurantLocationByID', restaurant.restaurantid);
  }

  setFoodType(food: any){
    this.foodType = food;
  }
  getFoodType(){
    return this.foodType;
  }

  

}
