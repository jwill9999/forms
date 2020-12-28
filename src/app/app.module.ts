import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './forms/profile-editor/profile-editor.component';
import { PrettyPipe } from './pretty.pipe';

@NgModule({
    declarations: [AppComponent, HomeComponent, ProfileEditorComponent, PrettyPipe],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
