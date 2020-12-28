import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    Validators,
    FormGroup,
    FormControl,
} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}

    onSubmit() {}
}
