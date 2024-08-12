import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "@/components/client/Navbar";

const meta = {
  title: "Client/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Navbar 컴포넌트",
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
