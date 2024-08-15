import type { Meta, StoryObj } from "@storybook/react";

import Text from ".";

const meta: Meta<typeof Text> = {
  title: "Shared/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Text 컴포넌트",
  },
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["p", "h1", "h2", "h3", "span", "div"],
      description: "HTML 태그 이름",
    },
    typo: {
      control: { type: "text" },
      description: "텍스트 타이포",
    },
    color: {
      control: { type: "color" },
      description: "텍스트 색상",
    },
    children: {
      control: { type: "text" },
      description: "텍스트 내용",
    },
    style: {
      control: { type: "object" },
      description: "커스텀 스타일 객체",
    },
    className: {
      control: { type: "text" },
      description: "커스텀 클래스 이름",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "예시",
    as: "p",
    typo: "body1",
    color: "textBlack",
  },
};

export const AsDiv: Story = {
  args: {
    children: "예시",
    as: "div",
    typo: "h1",
    color: "primary",
  },
};
