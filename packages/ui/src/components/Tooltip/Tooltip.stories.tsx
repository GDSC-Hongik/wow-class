import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Shared/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Tooltip 컴포넌트",
  },
  argTypes: {
    content: {
      description: "Tooltip 안에 들어갈 요소를 작성합니다.",
      table: {
        type: { summary: "ReactNode" },
        control: false,
      },
    },
    children: {
      description: "Tooltip 컴포넌트의 MouseOver 엘리먼트입니다.",
      table: {
        type: { summary: "ReactNode" },
        control: false,
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "툴팁 내용입니다",
    children: "마우스를 올려보세요!",
  },
};
