import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
} from '@angular/material';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ActionSnackBarComponent } from './action-snack-bar/action-snack-bar';
import { PropertyCardComponent } from './property-card/property-card';
import { LandlordCardComponent } from './landlord-card/landlord-card';
import { ReviewCardComponent } from './review-card/review-card';
import { StarsDisplayComponent } from './stars-display/stars-display';

@NgModule({
  declarations: [
    ActionSnackBarComponent,
    PropertyCardComponent,
    LandlordCardComponent,
    ReviewCardComponent,
    StarsDisplayComponent,
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'property-card',
        component: PropertyCardComponent,
      },
      {
        path: 'landlord-card',
        component: LandlordCardComponent,
      },
      {
        path: 'review-card',
        component: ReviewCardComponent,
      },
    ])
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    ActionSnackBarComponent,
    PropertyCardComponent,
    LandlordCardComponent,
    ReviewCardComponent,
    StarsDisplayComponent,
  ],
})
export class AngularMaterialModule {}
