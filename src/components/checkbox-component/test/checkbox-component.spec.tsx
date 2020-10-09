import { newSpecPage } from '@stencil/core/testing';
import { CheckboxComponent } from '../checkbox-component';

describe('checkbox-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<checkbox-component></checkbox-component>`,
    });
    expect(page.root).toEqualHtml(`
      <checkbox-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkbox-component>
    `);
  });
});
