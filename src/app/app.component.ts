import { AddEngineService } from './../services/add-engine.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'be-page';

  constructor(private service: AddEngineService) {}
}
