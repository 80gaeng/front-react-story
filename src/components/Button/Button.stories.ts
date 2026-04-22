import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'critical', 'success', 'warning'],
    },
  },
  args: {
    label: '버튼',
    variant: 'primary',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: '보조 버튼',
  },
};

export const Critical: Story = {
  args: {
    variant: 'critical',
    label: '에러 버튼',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: '성공 버튼',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: '경고 버튼',
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성 버튼',
    disabled: true,
  },
};
