import { AddEngineService } from './../../services/add-engine.service';
import { Component, OnInit } from '@angular/core';
import { Engine } from 'src/model/engine.model';

@Component({
  selector: 'app-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.scss'],
})
export class EngineListComponent implements OnInit {
  engines: any[];
  constructor(private service: AddEngineService) {}

  ngOnInit(): void {
    this.service.allEngines().subscribe((engines: Engine[]) => {
      console.table(engines);
      this.engines = engines;
    });
  }
}
