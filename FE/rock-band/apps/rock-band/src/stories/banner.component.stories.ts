import { BannerComponent } from '@rock-band-rock-ui';
import { Story, Meta } from '@storybook/angular';


export default {
  title: 'BannerComponent',
  component: BannerComponent,
  argTypes: {},
} as Meta;
const Template: Story<BannerComponent> = (args: BannerComponent) => ({
  component: BannerComponent,
  props: args,
});
export const bannerComponent = Template.bind({});