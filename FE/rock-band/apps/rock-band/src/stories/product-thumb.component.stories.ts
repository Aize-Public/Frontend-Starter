import { ProductThumbComponent } from '@rock-band-rock-ui';
import { Story, Meta } from '@storybook/angular';

export default {
  title: 'ProductThumbComponent',
  component: ProductThumbComponent,
  argTypes: {},
} as Meta;
const Template: Story<ProductThumbComponent> = (args: ProductThumbComponent) => ({
  component: ProductThumbComponent,
  props: args,
});
export const productThumbComponent = Template.bind({});
productThumbComponent.args = {
  imgSrc: 'http://placeimg.com/50/50/cats',
  title: 'Rustic Concrete Chair',
};