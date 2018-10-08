import { Component, Inject } from '@angular/core';
import { Inspection } from '../inspection/inspection';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-inspection-detail',
  templateUrl: './inspection-detail.component.html',
  styleUrls: ['./inspection-detail.component.css']
})
export class InspectionDetailComponent {
  
  inspection: Inspection;
  inspectionForm: FormGroup;

  constructor(
    private inspectionFormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InspectionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public inspectionData) {
      console.log(inspectionData);
      this.inspection = inspectionData.inspection;

      this.inspectionForm = inspectionFormBuilder.group({
        id: [this.inspection.id, Validators.required],
        designation: [this.inspection.designation, Validators.required],
        statut: [this.inspection.statut, Validators.required],
	      type: [this.inspection.type, Validators.required],
	      datePrevue: [this.inspection.datePrevue, Validators.required]
      });

    }

  inspectionDialogClose(): void {
    this.dialogRef.close();
  }

}
