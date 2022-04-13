import { HeaderComponent } from '@rock-band-rock-ui';
import { Story, Meta } from '@storybook/angular';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  argTypes: {},
} as Meta;
const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});
export const headerComponent = Template.bind({});
