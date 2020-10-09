import { newE2EPage } from '@stencil/core/testing';

describe('checkbox-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<checkbox-component></checkbox-component>');

    const element = await page.find('checkbox-component');
    expect(element).toHaveClass('hydrated');
  });
});
