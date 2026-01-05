import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LazyElementDirective } from '@angular-extensions/elements';

@Component({
  templateUrl: './claims.html',
  styleUrls: ['./claims.scss'],
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Claims {
  public readonly COMPONENT_URL = environment.claimsComponentURL;
}
