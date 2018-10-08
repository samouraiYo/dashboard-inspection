import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Inspection } from '../models/inspection';
import { INSPECTIONS } from '../mock-inspections';

@Injectable({
  providedIn: 'root',
})
export class InspectionService {

  constructor() { }

  getInspections(): Observable<Inspection[]> {
    return of(INSPECTIONS);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/