import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['text', 'number', 'email', 'password'],
    },
  },
  args: {
    label: '입력',
    type: 'text',
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    label: '텍스트 입력',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    label: '숫자 입력',
  },
};
