import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../services/post-data.service';
import { NgForm, FormControl } from '@angular/forms';
import { Apicalls } from '../../classes/apicalls';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  searchInput= '';
  type: any;
  resultArray: any =[];
  constructor(
    private postData: PostDataService
  ) { }

  ngOnInit() {
  }
  searchDatabase(form: NgForm){
    var apicall = new Apicalls(this.type, this.searchInput)
    if((this.type === 'getRatingComparison' || this.type === 'getFrequentRater' 
      || this.type === 'getHighRatedFoodbyRestaurantType' || this.type === 'getStaffRatingLowerThanRater'
      || this.type ==='getTypeDetailsByCategory' || this.type ==='getTypeDetails' || this.type ==='getMenuOfRestaurant' 
      || this.type === 'getRestaurantDetails' || this.type === 'getRestaurantLocationByID')){
       if(this.searchInput === ''){
         alert('Input is needed')
       } else {
          this.postData.searchEverything(apicall)
          .subscribe( data =>{
            this.resultArray = data;
            console.warn(data, "this is the seach results!")
        })
       }
     }else{
      this.postData.searchEverything(apicall)
      .subscribe( data =>{
        this.resultArray = data;
        console.warn(data, "this is the seach results!")
      })

     }

  }
  onChange(selectedValue){
    this.type = selectedValue;
  }
}
