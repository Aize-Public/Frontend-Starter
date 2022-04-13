import { SearchComponent } from '@rock-band-rock-ui';
import { Story, Meta } from '@storybook/angular';

export default {
  title: 'SearchComponent',
  component: SearchComponent,
  argTypes: {},
} as Meta;
const Template: Story<SearchComponent> = (args: SearchComponent) => ({
  component: SearchComponent,
  props: args,
});
export const searchComponent = Template.bind({});
