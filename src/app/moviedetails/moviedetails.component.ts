import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie.service';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
   declare ind:any;
   movieDetail:any = {};
      
    constructor(_ActivatedRoute:ActivatedRoute ,public _MovieService:MovieService) {
      this.ind = _ActivatedRoute.snapshot.paramMap.get("id")
    _MovieService.getTrendingMovie().subscribe((data)=>{
    this.movieDetail = data.results[this.ind];
  })
  }

  ngOnInit(): void {
   
  }

}
