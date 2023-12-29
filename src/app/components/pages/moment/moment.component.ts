import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute,RouterLink } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
  moment?:Moment;
  baseApiUrl= environment.Url
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService:MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private Router: Router,
    ){}

  ngOnInit():void{
    //id que esta na url
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))
  }


  async removeHendler(id: Number){
    await this.momentService.removeMoment(id).subscribe();
    this.messageService.add("Momento excluido com sucesso");
    this.Router.navigate(['/']);
  }
      

}
