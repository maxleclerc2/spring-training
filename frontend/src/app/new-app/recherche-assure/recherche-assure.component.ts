import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recherche-assure',
  templateUrl: './recherche-assure.component.html',
  styleUrls: ['./recherche-assure.component.css']
})
export class RechercheAssureComponent {
    searchForm = this.formBuilder.group({
        id: '',
        name: '',
        ssn: '',
        contract: ''
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    onSubmit(): void {
        let id = this.searchForm.get('id')?.value;
        //this.router.navigate(['creation-surcomplementaire-assure', id])
        this.redirectTo("creation-surcomplementaire-assure/" + id)
    }

    redirectTo(uri:string) {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate([uri])
        );
    }
}
