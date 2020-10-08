import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.scss',
  shadow: true,
})
export class InputComponent {

  @State() value: string;
  @Prop() label: string = 'Label';

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    // send data to our backend
  }

  handleChange(event) {
    this.value = event.target.value;
    console.log(this.value);
  }

  render() {
    return (
      <Host>
        <div class="ps-input">
          <label class="ps-input__label">{this.label}</label>
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)}></input>
        </div>
      </Host>
    );
  }

}
