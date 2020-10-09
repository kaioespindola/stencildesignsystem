import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.scss'
})
export class CardComponent {

  @Prop() cardtitle: string = "Title";

  render() {
    return (
      <div class="card">
        <div class="card__title">
          {this.cardtitle}
        </div>
        <div class="card__content">
          <slot></slot>
        </div>
      </div>
    );
  }

}
