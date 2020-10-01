import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  shadow: true,
})
export class InputComponent {

  render() {
    return (
      <Host>
          <label>First name:</label>
          <input type="text"></input>
      </Host>
    );
  }

}
