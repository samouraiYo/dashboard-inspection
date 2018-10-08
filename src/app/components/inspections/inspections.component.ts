import { Component, OnInit } from '@angular/core';
import { Inspection } from '../../models/inspection';
import { InspectionDetailComponent } from '../inspection-detail/inspection-detail.component';
import { InspectionService } from '../../services/inspection.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DateHelper } from '../../helpers/date-helper';

// mets pas de fonctions en mode JS de l'an 2000 à l'extérieur des classes, c'est pas beau
// si c'est une fonction réutilisable dans un autre projet, mets dans un helper
// si c'est lié à la récupération de données, mets dans un service
// si c'est une tranformation de données, bim dans les modèles
// sinon à l'intérieur du composant

@Component({
	selector: 'app-inspections',
	templateUrl: './inspections.component.html',
	styleUrls: ['./inspections.component.css']
})
export class InspectionsComponent implements OnInit {

	displayedColumns: string[] = [];
	inspections: Inspection[];

	constructor(private inspectionService: InspectionService, public dialog: MatDialog) { }

	ngOnInit() {

		this.getInspections();
		this.setDisplayedColumns(this.inspections);
		
		//console.log(this.inspections);
		//console.log(this.displayedColumns);
	}


  buildDateArray(fromDate: Date, toDate: Date): string[] {
    console.log("latest date : "+fromDate);
    console.log("earliest date : "+toDate);
    let arr = new Array();
    let dt = fromDate;
    while (dt <= toDate) {
      arr.push(DateHelper.getFormatted(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }

	sameDate(displayedDate, inspectionDate): boolean {
		//console.log("table date ="+displayedDate);
		//console.log("inspection date ="+inspectionDate);
		
		let d1 = new Date(inspectionDate); let d2 = new Date(displayedDate);
		return ( d1.getDate()+"/"+(d1.getMonth()+1) == displayedDate) ? true : false ;
	}

	applyFilter(filterValue: string): void {
		//this.inspections = filterValue.trim().toLowerCase();
	}
  
	getInspections(): void {
		this.inspectionService.getInspections()
		.subscribe(inspections => this.inspections = inspections);
	}

	setDisplayedColumns(inspections): void {
		let arr = new Array();
		arr = this.buildDateArray(
			new Date(Math.min.apply(null, inspections.map(function(e) {return new Date(e.datePrevue);}))),
			new Date(Math.max.apply(null, inspections.map(function(e) {return new Date(e.datePrevue);})))
		);
		arr.unshift("Inspections");
		this.displayedColumns = arr;
	}

	openInspectionDetail(currentInspection: Inspection): void {
		const dialogRef = this.dialog.open(InspectionDetailComponent, {
			width: '650px',
			data: {inspection: currentInspection}
		  });
	}
}
