import type { Meta, StoryObj } from "@storybook/react";

import Header from ".";

const meta = {
  title: "Client/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Header 컴포넌트",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
