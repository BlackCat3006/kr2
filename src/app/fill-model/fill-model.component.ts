import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Models{
  ig!: any;
  name!: string;
  date!: any;
  price!: any;
}

@Component({
  selector: 'app-fill-model',
  templateUrl: './fill-model.component.html',
  styleUrls: ['./fill-model.component.css']
})
export class FillModelComponent {
  ig!: number;
  name!: string;
  date!: number;
  model: Models=new Models();
  m: any;
  constructor( private router: Router) { }

  goToItem(Models: Models){
    var Object = { 'id': this.ig, 'name': this.name, 'date': this.date };
    localStorage.setItem(this.name, JSON.stringify(Object));
    location.reload();
    this.router.navigate(
      ['/models', Models.name]
    );
  }
}
