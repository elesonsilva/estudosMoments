import { Component, OnInit } from '@angular/core';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { ReactiveFormsModule } from '@angular/forms';

import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';

@Component({
    selector: 'app-new-moment',
    standalone: true,
    templateUrl: './new-moment.component.html',
    styleUrl: './new-moment.component.css',
    imports: [MomentFormComponent, ReactiveFormsModule]
})
export class NewMomentComponent implements OnInit {
    btnText = 'Compartilhar';

    constructor( private momentService: MomentService){


    }
    
    
    
    
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
    
        
        //exibir mensagem 

        //redirect
    }
}
