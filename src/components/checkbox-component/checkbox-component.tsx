import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'checkbox-component',
  styleUrl: 'checkbox-component.scss'
})
export class CheckboxComponent {

  @Prop({ mutable: true }) checked: boolean = false;
  @Prop({ mutable: true }) disabled: boolean = false;

  @Prop() label: string = 'Label';

  render() {
    return (
      <Host>
        <label class={{ 'checkbox': true }}>
          <input type="checkbox" checked={this.checked} disabled={this.disabled}/>
          <span>{this.label}</span>
        </label>
      </Host>
    );
  }

}
