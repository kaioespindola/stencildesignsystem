import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true,
})
export class ButtonComponent {

  render() {
    return (
      <Host>
        Hey
        <slot></slot>
      </Host>
    );
  }

}
