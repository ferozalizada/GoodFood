import { Component, OnInit } from '@angular/core';
import { DatapointService } from '../../services/datapoint.service';

@Component({
  selector: 'app-averageprice',
  templateUrl: './averageprice.component.html',
  styleUrls: ['./averageprice.component.css']
})
export class AveragepriceComponent implements OnInit {

  constructor(
    private datapointService: DatapointService
  ) { }
averageItemPrice: any;

  ngOnInit() {
    this.getAvgPrice();
  }
getAvgPrice(){
  this.datapointService.searchDataBySelection('getAvgMenuItem','')
  .subscribe(data =>{
    this.averageItemPrice = data;
    console.log(data,"this si tehe average menu")
  })

}
}
