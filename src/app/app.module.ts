import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { AddComponent } from './component/add/add.component';
import { ListComponent } from './component/list/list.component';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SearchGroupPipe } from './pipes/search-group.pipe';
import { SearchDirectionPipe } from './pipes/search-direction.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PersonsComponent,
    AddComponent,
    ListComponent,
    SortPipe,
    SearchPipe,
    SearchGroupPipe,
    SearchDirectionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
