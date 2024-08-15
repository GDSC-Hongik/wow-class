import type { Meta, StoryObj } from "@storybook/react";
import Tag from "wowds-ui/Tag";

import Text from "../Text";
import Table from ".";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
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

export const WithContent: Story = {
  args: {
    children: (
      <>
        <Text typo="h3">기초 웹스터디</Text>
        <Table.Content
          subText="종료 : 2024년 5월 23일 23:59"
          text="(과제 제목) HTTP 통신 코드 작성하기"
          rightContent={
            <Tag color="blue" variant="solid1">
              온라인 세션
            </Tag>
          }
        />
        <Text typo="h3">오른쪽 컨텐츠</Text>
      </>
    ),
  },
};

export const WithoutSubText: Story = {
  args: {
    children: (
      <>
        <Table.Left>
          <Text typo="h3">기초 웹스터디</Text>
          <Table.Content
            text="(과제 제목) HTTP 통신 코드 작성하기"
            rightContent={
              <Tag color="blue" variant="solid1">
                온라인 세션
              </Tag>
            }
          />
        </Table.Left>
        <Table.Right>
          <Text typo="h3">오른쪽 컨텐츠</Text>
        </Table.Right>
      </>
    ),
  },
};
