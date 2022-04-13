import { CartItemComponent } from '@rock-band-rock-ui';
import { Story, Meta } from '@storybook/angular';

export default {
  title: 'CartItemComponent',
  component: CartItemComponent,
  argTypes: {},
} as Meta;
const Template: Story<CartItemComponent> = (args: CartItemComponent) => ({
  component: CartItemComponent,
  props: args,
});
export const cartItemComponent = Template.bind({});
cartItemComponent.args = {
  label: 'Product Name',
  inlineText: '450$',
};