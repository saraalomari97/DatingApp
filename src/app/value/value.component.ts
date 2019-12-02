import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { error } from 'util';
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
values: any;
  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.getValue();
  }

  getValue() {
    this.http.get('http://localhost:5000/api/Values/').subscribe(Response => {
      this.values = Response;
    }, Error =>
    {
      console.error(error);
    });
  }

}
