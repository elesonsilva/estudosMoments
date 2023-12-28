import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fasearch = faSearch;
  SearchTerm : string = "";

  allMoments : Moment[] =[];
  moments: Moment[]=[];

  baseApiUrl = environment.Url
  
  constructor(private momentService:MomentService){}

  ngOnInit(): void{
    this.momentService.getMoments().subscribe((itens=>{
      const data = itens.data

      data.map((item)=>{
        item.created_ad = new Date(item.created_ad!).toLocaleDateString('pt-br');
        this.allMoments = data
        this.moments = data
      });
    })
    );
  }

  search(event: any):void{

    const target = event.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter(moments =>{
       return moments.title.toLocaleLowerCase().includes(value)
    })
  }

}
