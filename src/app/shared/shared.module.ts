import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule
} from '@angular/material';

/*Component*/
import { NotFoundComponent }      from '@app/shared/not-found/not-found.component';
import { HeaderComponent }        from '@app/shared/header/header.component';
import { FooterComponent }        from '@app/shared/footer/footer.component';
import { ConfirmDialogComponent } from '@app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { NavbarComponent }        from '@shared/nav/navbar.component';

/*Pipe*/
import { ObjectKeysPipe } from './pipes/object-keys.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule
    ],
    exports: [
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatMenuModule,
        MatGridListModule,
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,

        NotFoundComponent,
        ConfirmDialogComponent,
        ObjectKeysPipe,

        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        ConfirmDialogComponent

    ],
    declarations: [
        NotFoundComponent,
        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        ConfirmDialogComponent,

        ObjectKeysPipe
    ]
})
export class SharedModule { }
