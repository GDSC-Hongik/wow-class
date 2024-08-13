import type { Meta, StoryObj } from "@storybook/react";

import folderImageUrl from "../../assets/folder.svg";
import homeImageUrl from "../../assets/home.svg";
import Navbar from ".";

const meta = {
  title: "UI/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Navbar 컴포넌트",
  },
  argTypes: {
    imageUrl: {
      control: false,
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "studies",
    imageUrl: homeImageUrl,
    alt: "home-icon",
    name: "개설된 스터디",
  },
};

export const WithSubItems: Story = {
  args: {
    href: "studies",
    imageUrl: homeImageUrl,
    alt: "home-icon",
    name: "개설된 스터디",
    items: [
      {
        href: "basic-web-study",
        imageUrl: folderImageUrl,
        alt: "folder-icon",
        name: "기초 웹 스터디",
      },
      {
        href: "dev-beginner-study",
        imageUrl: folderImageUrl,
        alt: "folder-icon",
        name: "개발 입문 스터디",
      },
      {
        href: "basic-mobile-study",
        imageUrl: folderImageUrl,
        alt: "folder-icon",
        name: "기초 모바일 스터디",
      },
    ],
  },
};
