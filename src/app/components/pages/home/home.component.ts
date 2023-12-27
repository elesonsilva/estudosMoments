import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


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

}
