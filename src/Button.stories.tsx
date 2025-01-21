import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
  },
};

export const Loading: Story = {
  args: {
    children: "Click me",
    loading: true,
  },
};
