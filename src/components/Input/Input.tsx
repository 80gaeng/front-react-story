import './Input.css';

export interface InputProps {
  label: string;
  type?: 'text' | 'number' | 'email' | 'password';
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export function Input({ label, type = 'text', disabled = false, onChange }: InputProps) {
  return (
    <input
      type="button"
      className={`ui-input ui-input--${type}`}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
