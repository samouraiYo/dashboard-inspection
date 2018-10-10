import { Component, Inject } from '@angular/core';
import { Inspection } from '../../models/inspection';
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
  avisForm: FormGroup;
  ordreForm: FormGroup;
  equipementForm: FormGroup;
  ptForm: FormGroup;

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

      this.inspectionForm.disable();

      this.avisForm = inspectionFormBuilder.group({
        id:[this.inspection.avis.id, Validators.required],
        type:[this.inspection.avis.type, Validators.required],
        cycle:[this.inspection.avis.cycle, Validators.required],
        last_inspection:[this.inspection.avis.last_inspection, Validators.required],
        next_inspection:[this.inspection.avis.next_inspection, Validators.required],
      });
      this.avisForm.disable();

      this.ordreForm = inspectionFormBuilder.group({
        id:[this.inspection.ordre.id, Validators.required]
      });
      this.ordreForm.disable();

      this.ptForm = inspectionFormBuilder.group({
        id:[this.inspection.posteTechnique.id, Validators.required],
        designation:[this.inspection.posteTechnique.designation, Validators.required]
      });
      this.ptForm.disable();

      this.equipementForm = inspectionFormBuilder.group({
        id:[this.inspection.equipement.id, Validators.required],
        designation:[this.inspection.equipement.designation, Validators.required]
      });
      this.equipementForm.disable();
    }

  inspectionDialogClose(): void {
    this.dialogRef.close();
  }

}
