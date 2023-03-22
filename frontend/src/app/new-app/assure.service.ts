import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Assure } from './assure';
import { ASSURES } from './mock-assures';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class AssureService {

  constructor(private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`AssureService: ${message}`);
  }

  getAssures(): Observable<Assure[]> {
    const assures = of(ASSURES);
    return assures
  }

  getAssure(id: number): Observable<Assure> {
    const assure = of (ASSURES.filter((assure) => assure.id == id)[0]);
    return assure;
  }
}
