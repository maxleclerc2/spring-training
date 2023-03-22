import { Component } from '@angular/core';
import { Assure } from '../assure';
import { AssureService } from '../assure.service';

@Component({
  selector: 'app-informations-assure',
  templateUrl: './informations-assure.component.html',
  styleUrls: ['./informations-assure.component.css']
})
export class InformationsAssureComponent {
    assure: Assure | undefined;

    constructor(private assureService: AssureService) {}

    ngOnInit(): void {
        this.getAssure();
    }

    getAssure(): void {
        this.assureService.getAssure(123).subscribe(assure => this.assure = assure);
    }
}
