import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.html',
    styleUrls: ['navigation.scss'],
    imports: [RouterLink]
})
export class Navigation {
}
