import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "버튼 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    className: {
      description: "버튼에 전달하는 커스텀 클래스를 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    children: {
      description: "버튼의 자식 요소를 나타냅니다.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    appName: {
      description: "버튼 클릭 시 표시할 앱 이름을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    appName: "Default App",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "btn btn-primary",
    appName: "Primary App",
  },
};

export const LargeSolid: Story = {
  args: {
    children: "Large Solid Button",
    className: "btn btn-large",
    appName: "Large Solid App",
  },
};

export const LargeOutline: Story = {
  args: {
    children: "Large Outline Button",
    className: "btn btn-large btn-outline",
    appName: "Large Outline App",
  },
};

export const SmallSolid: Story = {
  args: {
    children: "Small Solid Button",
    className: "btn btn-small",
    appName: "Small Solid App",
  },
};

export const SmallOutline: Story = {
  args: {
    children: "Small Outline Button",
    className: "btn btn-small btn-outline",
    appName: "Small Outline App",
  },
};
