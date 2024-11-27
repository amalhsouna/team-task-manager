import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { FormsModule } from '@angular/forms';
import { TaskFormDialogComponent } from './components/task-form-dialog/task-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TaskListComponent,
    TeamDetailComponent,
    TaskFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
