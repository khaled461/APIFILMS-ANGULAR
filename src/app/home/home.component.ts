import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

 
})
export class HomeComponent implements OnInit {
  
  declare term:string;

  currentPage = 1;
  password:string = "SAas";
  pageNumbers:number[]=[];


  trendingAll = [];

  constructor(private _MovieService:MovieService) {


    for(let i =1 ; i <11 ; i++)
    {
      this.pageNumbers.push(i);
    }

      _MovieService.getTrendingAll(this.currentPage).subscribe( (data) => {
        this.trendingAll= data.results
      } )
   }

   changeNumber(ind :number)
   {
     this.currentPage  = ind;
    this._MovieService.getTrendingAll(this.currentPage ).subscribe( (data) => {
      this.trendingAll= data.results
    } )
   }
   prev()
   {
      this.changeNumber(this.currentPage -1)
   }
   next()
   {
      this.changeNumber(this.currentPage +1)
   }


  ngOnInit() {
  }

}



let x  = {name:'ahmed' , age:21 ,salary:2121};
let x1 = new Map();

x1.set("name" , "ahmed")
x1.set("age" , 21)


x1.clear()