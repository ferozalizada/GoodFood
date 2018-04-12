import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { User } from '../classes/user';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Apicalls } from '../classes/apicalls';
import { Restaurant } from '../classes/restaurant';
import { MenuItems } from '../classes/menu-items';

const options = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
};

function serialize(json: object): string {
  let body = new HttpParams();

  for (const key in json) {
    // console.warn(key);
    if (json.hasOwnProperty(key)) {
      body = body.set(key, json[key]);
    }
  }

  return body.toString();
}

@Injectable()
export class PostDataService {
  private urlsignUp: string = 'http://localhost:8888/BackEndDB/signUp.php';
  private urlLogin: string = 'http://localhost:8888/BackEndDB/login.php';
  private urlFetchAPI: string = 'http://localhost:8888/BackEndDB/fetchAPI.php';
  private urlpushAPI: string = 'http://localhost:8888/BackEndDB/pushAPI.php';
  private urlpushAPI2: string = 'http://localhost:8888/BackEndDB/response.php';
  
  constructor(private httpClient: HttpClient) { 
    console.log("Post services are running ");
  }
  postRestaurant(rest: Restaurant){
    return this.httpClient.post(this.urlpushAPI, serialize(rest), options)
  }
  postMenuItem(menu: MenuItems){
    return this.httpClient.post(this.urlpushAPI2, serialize(menu), options)
  }
  deleteRestaurant(id: any){
    var x = new Apicalls('deleteRestaurant',id);
    return this.httpClient.post(this.urlpushAPI, serialize(x), options)
  }
  deteletMenuItem(id: Apicalls){
    return this.httpClient.post(this.urlpushAPI2, serialize(id), options)
  }

  postRegistrationData(user: User) {
    // console.log(serialize(user))
    return this.httpClient.post(this.urlsignUp, serialize(user), options)
  }

  loginUser(user: User) {
    return this.httpClient.post(this.urlLogin, serialize(user), options)
  }

  fetchAPIData(method: Apicalls){
    return this.httpClient.post(this.urlFetchAPI, serialize(method), options)
  }

  searchString(query: any){
    var result = new Apicalls('getRestaurantLocationByID', query);
    return this.fetchAPIData(result);
  }
  getTopRatedByType(){
    var result = new Apicalls('getTypePopularity', 'query');
    return this.fetchAPIData(result);
  }
  getMenuOfRestaurant(id: any){
    var result = new Apicalls('getMenuOfRestaurant', id)
      return this.fetchAPIData(result);
  }
  getRestaurantDetails(id: any){
    var result = new Apicalls('getRestaurantDetails', id)
    return this.fetchAPIData(result);
  }
  rateRestaurant(form: object){
    return this.httpClient.post(this.urlpushAPI, serialize(form), options);
  }
  getTypeDetails(id: any){
    var result = new Apicalls('getTypeDetails', id)
    return this.fetchAPIData(result);
  }
  searchEverything(input: Apicalls){
    return this.httpClient.post(this.urlFetchAPI, serialize(input), options);
  }
  fetchFoodMenu(input: any){
    var x = new Apicalls('fetchFoodMenu', input);
    return this.fetchAPIData(x);
  }

  
}
