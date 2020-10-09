import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss'
})
export class ButtonComponent {

  @Prop() type: string = "primary";
  @Prop() label: string = "Botão";

  render() {
    return (
      <Host>
        <div class={{ 'button': true, 'primary': this.type == "primary", 'secondary': this.type == "secondary" }}>
          <span>{this.label}</span>
        </div>
      </Host>
    );
  }

}
