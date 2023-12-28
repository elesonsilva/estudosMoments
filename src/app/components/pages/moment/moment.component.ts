import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
  moment?:Moment;

  constructor(
    private momentService:MomentService,
    private route: ActivatedRoute
    ){}

  ngOnInit():void{
    //id que esta na url
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))
  }


}
