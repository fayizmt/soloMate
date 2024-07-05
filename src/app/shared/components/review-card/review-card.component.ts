import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
})
export class ReviewCardComponent {
  @Input() photo!: string;
  @Input() username!: string;
  @Input() rating!: number;
  @Input() review!: string;

  get stars() {
    return new Array(this.rating);
  }
}
