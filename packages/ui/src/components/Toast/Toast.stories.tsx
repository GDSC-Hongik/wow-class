import type { Meta, StoryObj } from "@storybook/react";

import Toast from ".";

const meta: Meta<typeof Toast> = {
  title: "Shared/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Toast 컴포넌트",
  },
  argTypes: {
    text: {
      description: "Toast에 들어갈 메인 텍스트를 나타냅니다.",
      control: { type: "text" },
    },
    subText: {
      description: "Toast에 들어갈 보조 텍스트를 나타냅니다.",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Text",
    subText: "subtext",
  },
};
