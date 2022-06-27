import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople :any =[];
  constructor(private _MovieService:MovieService) { 
    this._MovieService.getTrendingPerson().subscribe((data)=>{
      this.trendingPeople = data.results;
    })

  }


  ngOnInit(): void {
  }

}
