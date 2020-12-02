import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {} from './';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-front-end';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Make the HTTP request:
    this.http.get('http://localhost:8000').subscribe(data => {
      console.log(data);
      // this.user = data;
    })
  }
}
