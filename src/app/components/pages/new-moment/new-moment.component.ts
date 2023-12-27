import { Component, OnInit } from '@angular/core';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { ReactiveFormsModule } from '@angular/forms';
import { Router} from '@angular/router';

import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
    selector: 'app-new-moment',
    standalone: true,
    templateUrl: './new-moment.component.html',
    styleUrl: './new-moment.component.css',
    imports: [MomentFormComponent, ReactiveFormsModule,]
})
export class NewMomentComponent implements OnInit {
    btnText = 'Compartilhar';

    constructor( private momentService: MomentService, 
                 private messageService: MessagesService, 
                 private rourte:Router
                 ){ }
    
    
    
    
    ngOnInit(): void {
        
    }
    
    async createHandle(moment:Moment){
        const formData = new FormData()
        
        formData.append('title', moment.title)
        formData.append('description', moment.description)
        if(moment.image){
            formData.append('image', moment.image)
        }
        
        //todo 
        
        //enviar para o service
        this.momentService.createMoment(formData).subscribe();

        // Enviar para o serviço
        this.messageService.add("Momento Adicionado com Sucesso!")
        
        //exibir mensagem 

        //redirect
        this.rourte.navigate(['/'])
    }
}
