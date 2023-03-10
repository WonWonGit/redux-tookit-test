import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Todo/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "medium",
  label: "Button",
  backgroundColor: "#FFA000",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
  backgroundColor: "#FFA000",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
  backgroundColor: "#FFA000",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
  backgroundColor: "#FFA000",
};
