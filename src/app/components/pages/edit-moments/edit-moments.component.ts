import { Component } from '@angular/core';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { MessagesService } from '../../../services/messages.service';

@Component({
    selector: 'app-edit-moments',
    standalone: true,
    templateUrl: './edit-moments.component.html',
    styleUrl: './edit-moments.component.css',
    imports: [CommonModule, MomentFormComponent]
})
export class EditMomentsComponent {
  moment!: Moment;
  btnText: string = 'editar';

  constructor(
        private momentService:MomentService,
        private route:ActivatedRoute,
        private messageService: MessagesService,
        private router: Router){}

  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService.getMoment(id).subscribe((item)=>{
      this.moment = item.data
    })
  }

  async editHandler(momentData: Moment){
    const id = this.moment.id
    const formdata = new FormData()

    formdata.append('title', momentData.title)
    formdata.append('description', momentData.description)
    
    if(momentData.image){
      formdata.append('image', momentData.image)
    }

    await this.momentService.updateMoment(id!, formdata).subscribe()

    this.messageService.add(`Momentos ${id} foi atualizado com sucesso!`)

    this.router.navigate(['/'])
  }

}
