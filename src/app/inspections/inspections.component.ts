import { Component, OnInit } from '@angular/core';
import { Inspection } from '../inspection/inspection';
import { InspectionService } from '../inspection.service';

function buildDateArray(fromDate: Date,toDate: Date) {
	let arr = new Array();
    let dt = fromDate;
    while (dt <= toDate) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}


@Component({
	selector: 'app-inspections',
	templateUrl: './inspections.component.html',
	styleUrls: ['./inspections.component.css']
})
export class InspectionsComponent implements OnInit {

	displayedColumns: string[] = ['Inspection','17/10','18/10','19/10','20/10','21/10']
	inspections: Inspection[];

	constructor(private inspectionService: InspectionService) { }

	ngOnInit() {

		this.getInspections();
		let latestDate: Date = new Date(Math.max.apply(null, this.inspections.map(function(e) {return new Date(e.datePrevue);})));
		let earliestDate: Date = new Date(Math.min.apply(null, this.inspections.map(function(e) {return new Date(e.datePrevue);})));
		
		
		console.log(this.inspections);
		console.log("latest date : "+latestDate);
		console.log("earliest date : "+earliestDate);
	}

	sameDate(inspectionDate, displayedDate): boolean {
		let d1 = new Date(inspectionDate); let d2 = new Date(displayedDate);
		return (d1.getDay() == d2.getDay() &&  d1.getMonth() == d2.getMonth()) ? true : false ;
	}

	applyFilter(filterValue: string): void {
		//this.inspections = filterValue.trim().toLowerCase();
	}
  
	getInspections(): void {
		this.inspectionService.getInspections()
		.subscribe(inspections => this.inspections = inspections);
	}
}
