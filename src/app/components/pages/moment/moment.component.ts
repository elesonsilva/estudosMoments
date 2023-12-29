import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute,RouterLink } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesService } from '../../../services/messages.service';
import { Coment } from '../../../Coments';
import { ComentService } from '../../../services/coment.service';
import { FormGroup, FormControl,Validators, FormGroupDirective } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink,ReactiveFormsModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
  moment?:Moment;
  baseApiUrl= environment.Url
  faTimes = faTimes;
  faEdit = faEdit;

  comentForm!: FormGroup

  constructor(
    private momentService:MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private Router: Router,
    private comentService: ComentService,
    ){}

  ngOnInit():void{
    //id que esta na url
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))

    this.comentForm = new FormGroup({
      text: new FormControl("",[Validators.required]),
      username: new FormControl("",[Validators.required])
    });
  }
  get text(){
    return this.comentForm.get('text')!
  }
  get username(){
    return this.comentForm.get('username')!
  }

  async removeHendler(id: Number){
    await this.momentService.removeMoment(id).subscribe();
    this.messageService.add("Momento excluido com sucesso");
    this.Router.navigate(['/']);
  }

  async onSubmit(FormDirective: FormGroupDirective){
    if(this.comentForm.invalid){
      return
    }
    const data: Coment = this.comentForm.value
    data.momentId = Number(this.moment!.id)

    await this.comentService.creatComent(data).subscribe((coment) => this.moment!.coments!.push(coment.data))

    this.messageService.add('Comentario adicionado')
    //resete o Form
    this.comentForm.reset()

    FormDirective.resetForm()
  }
   
  

}
