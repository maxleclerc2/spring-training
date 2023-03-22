import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Assure } from '../assure';
import { AssureService } from '../assure.service';

@Component({
  selector: 'app-informations-assure',
  templateUrl: './informations-assure.component.html',
  styleUrls: ['./informations-assure.component.css']
})
export class InformationsAssureComponent {
    assure: Assure | undefined;

    constructor(
        private route: ActivatedRoute,
        private assureService: AssureService
    ) {}

    ngOnInit(): void {
        this.getAssure();
    }

    getAssure(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.assureService.getAssure(id).subscribe(assure => this.assure = assure);
    }
}
