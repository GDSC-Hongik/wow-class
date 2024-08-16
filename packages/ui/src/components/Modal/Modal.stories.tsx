import type { Meta, StoryObj } from "@storybook/react";
import { useModalState } from "src/hooks";

import Text from "../Text";
import Modal from ".";

const meta = {
  title: "Shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Modal 컴포넌트",
  },
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Text as="h1" typo="h1">
        상세 정보가 등록되었어요.
      </Text>
    ),
    closeModal: () => {
      console.log("모달 닫기");
    },
  },
};

export const StateModal = () => {
  const { isOpen, openModal, closeModal } = useModalState();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <Text as="h1" typo="h1">
            상세 정보가 등록되었어요.
          </Text>
        </Modal>
      )}
    </>
  );
};
