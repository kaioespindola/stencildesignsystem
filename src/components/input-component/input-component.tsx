import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.scss'
})
export class InputComponent {

  @State() value: string;
  @Prop() label: string = 'Label';
  @Prop({ mutable: true }) disabled: boolean = false;

  handleChange(event) {
    this.value = event.target.value;
    console.log(this.value);
  }

  render() {
    return (
      <Host>
        <label>{this.label}</label>
        <input type="text" disabled={this.disabled} value={this.value} onFocus={() => this.handleChange(event)} onInput={(event) => this.handleChange(event)}></input>
      </Host>
    );
  }

}
