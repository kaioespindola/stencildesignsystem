import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.scss'
})
export class HeaderComponent {

  @Prop() logo: string;

  render() {
    return (
      <div class="header">
        <img src={this.logo}></img>
      </div>
    );
  }

}
