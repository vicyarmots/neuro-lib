import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SaveButton = Template.bind({});
SaveButton.args = {
  label: "Save",
};

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  label: "Delete",
};
