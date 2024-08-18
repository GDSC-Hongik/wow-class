import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "..";
import Text from "../Text";

const meta: Meta<typeof Table> = {
  title: "Shared/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Table 컴포넌트",
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Left>
          <Text typo="h3">왼쪽 컨텐츠</Text>
        </Table.Left>
        <Table.Right>
          <Text typo="h3">오른쪽 컨텐츠</Text>
        </Table.Right>
      </>
    ),
  },
};
