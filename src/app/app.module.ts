import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InspectionsComponent } from './inspections/inspections.component';
import { InspectionDetailComponent } from './inspection-detail/inspection-detail.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectionsComponent,
    InspectionDetailComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatBadgeModule,
    MatButtonModule,MatIconModule,MatToolbarModule,MatFormFieldModule,MatInputModule,MatDialogModule,MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InspectionDetailComponent]
})
export class AppModule { }
