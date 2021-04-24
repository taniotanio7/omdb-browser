import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Input, { IInputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    name: "Some input",
  },
} as Meta<IInputProps>;

const Template: Story<IInputProps> = args => <Input {...args} />;

export const Default = Template.bind({});
