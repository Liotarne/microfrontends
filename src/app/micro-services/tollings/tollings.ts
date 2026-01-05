import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LazyElementDirective } from '@angular-extensions/elements';

@Component({
  templateUrl: './tollings.html',
  styleUrls: ['./tollings.scss'],
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tollings {
  public readonly COMPONENT_URL = environment.tollingsComponentURL;
}
