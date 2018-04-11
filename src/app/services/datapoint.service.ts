import { Injectable } from '@angular/core';
import { Apicalls } from '../classes/apicalls';
import { PostDataService } from './post-data.service';
import{ BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatapointService {
  private contentSharingService = new BehaviorSubject<any>('');
  currentData = this.contentSharingService.asObservable();
  searchMethodbyID = new Apicalls('','');
  
  constructor(
    private postData: PostDataService
  ) { }

  currentRestaurant: any;
  queryResultByID: any;
  foodType: any;

  changeCurrentData(data: any){
    this.contentSharingService.next(data);
  }
  setRestaurant(res: any){
    this.currentRestaurant = res;
  }
  getSelectedRestaurant(){
    return this.currentRestaurant;
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
