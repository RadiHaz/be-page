import { AddEngineService } from './../../services/add-engine.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-engine',
  templateUrl: './new-engine.component.html',
  styleUrls: ['./new-engine.component.scss'],
})
export class NewEngineComponent implements OnInit {
  @Output() engineData = new EventEmitter<any>();

  engine: string;
  docLink: string;

  constructor(private service: AddEngineService, private router: Router) {}

  ngOnInit(): void {}

  generateRandomId() {
    return Math.round(Math.random() * 100);
  }

  addEngine() {
    this.service
      .insertEngine({
        engine: this.engine,
        docLink: this.docLink,
        id: this.generateRandomId(),
      })
      .subscribe(
        (result) => {
          console.log('post method result ->', result);
          this.router.navigateByUrl('/engine-list');
        },
        (error) => console.log('error ->', error)
      );
  }
}
